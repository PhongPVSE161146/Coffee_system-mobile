import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated, Easing, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import ConfettiCannon from 'react-native-confetti-cannon'; // Import hiệu ứng pháo bông

const SCREEN_WIDTH = Dimensions.get('window').width;
const mockNotifications = [
    { id: '1', title: '🛍 Khuyến mãi HOT!', body: 'Giảm giá 50% cho đơn hàng đầu tiên.', data: { screen: 'Voucher' } },
    { id: '2', title: '📦 Đơn hàng đã giao', body: 'Đơn hàng của bạn đã được giao thành công.', data: { screen: 'OrderDetail', orderId: '12345' } },
    { id: '3', title: '🎁 Quà tặng dành riêng cho bạn!', body: 'Bạn có một mã giảm giá 20%.', data: { screen: 'Wallet' } }
];

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            Alert.alert('Thông báo', 'Quyền thông báo chưa được cấp');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        Alert.alert('Thông báo', 'Phải dùng thiết bị thật để nhận thông báo');
    }
    return token;
}

export default function HomePageScreen({ navigation }) {
    const notificationListener = useRef();
    const responseListener = useRef();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, { toValue: -SCREEN_WIDTH, duration: 10000, easing: Easing.linear, useNativeDriver: true }),
                Animated.timing(animatedValue, { toValue: SCREEN_WIDTH, duration: 0, useNativeDriver: true })
            ])
        ).start();
    }, []);

    useEffect(() => {
        registerForPushNotificationsAsync();

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            Alert.alert(notification.request.content.title, notification.request.content.body);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        const sendImmediateNotification = async () => {
            await Notifications.scheduleNotificationAsync({

                trigger: null,
            });
            setShowConfetti(true); // Hiện hiệu ứng pháo bông
        };

        sendImmediateNotification();

        const interval = setInterval(() => {
            sendRandomNotification();
        }, 30000);

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
            clearInterval(interval);
        };
    }, []);

    const sendRandomNotification = async () => {
        const randomIndex = Math.floor(Math.random() * mockNotifications.length);
        const notification = mockNotifications[randomIndex];

        await Notifications.scheduleNotificationAsync({
            content: {
                title: notification.title,
                body: notification.body,
                data: notification.data,
            },
            trigger: null,
        });
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.runningText, { transform: [{ translateX: animatedValue }] }]} numberOfLines={1}>
                Chào Mừng Bạn Đến Với KOHI COFFEE!
            </Animated.Text>

            <Image source={{ uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/08/anh-cafe.jpg' }} style={styles.image} />

            <Text style={styles.utilityTitle}>Tiện ích và hỗ trợ nhanh</Text>
            <UtilitySection navigation={navigation} />

            {showConfetti && <ConfettiCannon count={200} origin={{ x: SCREEN_WIDTH / 2, y: 0 }} fadeOut />}
        </View>
    );
}

function UtilitySection({ navigation }) {
    const utilityData = [
        { label: 'Theo dõi đơn hàng', icon: 'clipboard-outline', color: '#4CAF50', screen: 'OrderTrackingScreen' },
        { label: 'Bảo hành, bảo dưỡng', icon: 'construct-outline', color: '#2196F3', screen: 'WarrantyScreen' },
        { label: 'Thanh toán hóa đơn', icon: 'cash-outline', color: '#FF9800', screen: 'History' },
        { label: 'Quà của tôi', icon: 'gift-outline', color: '#E91E63', screen: 'Voucher' },
        { label: 'Liên hệ hỗ trợ', icon: 'call-outline', color: '#9C27B0', screen: 'ContactSupportScreen' },
        { label: 'Dịch vụ tiện ích', icon: 'apps-outline', color: '#3F51B5', screen: 'UtilityServiceScreen' },
    ];

    return (
        <View style={styles.utilityContainer}>
            {utilityData.map((item, index) => (
                <TouchableOpacity key={index} style={[styles.utilityItem, { backgroundColor: item.color }]} onPress={() => navigation.navigate(item.screen)}>
                    <Ionicons name={item.icon} size={24} color="white" />
                    <Text style={styles.utilityText}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff', alignItems: 'center' },
    runningText: { fontSize: 16, fontWeight: 'bold', color: '#ff5733', marginBottom: 10 },
    utilityTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    image: { width: 500, height: 200, borderRadius: 10, marginBottom: 20 },
    utilityContainer: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
    utilityItem: { width: '45%', height: 80, margin: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    utilityText: { color: '#fff', fontWeight: 'bold', marginTop: 5 },
});