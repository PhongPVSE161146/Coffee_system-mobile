import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated, Easing, Dimensions, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Badge } from 'react-native-elements';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const SCREEN_WIDTH = Dimensions.get('window').width;

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

export default function HomePageScreen({ navigation, route }) {
    const [user, setUser] = useState(null);
    const [walletBalance, setWalletBalance] = useState(600000); // Số dư ban đầu
    const [showConfetti, setShowConfetti] = useState(false);

    const notificationListener = useRef();
    const responseListener = useRef();
    const animatedValue = useRef(new Animated.Value(0)).current;

    // Memoize hàm updateWalletBalance
    const updateWalletBalance = useCallback((amount) => {
        setWalletBalance(prevBalance => {
            const newBalance = prevBalance + amount;
            Alert.alert('Thành công', `Đã nạp ${amount.toLocaleString()}đ vào ví KoHi! Số dư mới: ${newBalance.toLocaleString()}đ`);
            return newBalance;
        });
    }, []); // Không có dependency vì hàm không phụ thuộc vào state hay props thay đổi

    // Truyền updateWalletBalance qua navigation chỉ một lần khi mount
    useEffect(() => {
        navigation.setParams({ updateWalletBalance });
    }, [navigation, updateWalletBalance]); // Dependency là updateWalletBalance đã được memoized

    // Xác thực user
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("User data:", user);
            if (user) {
                setUser(user);
            } else {
                setUser({ displayName: 'Viruss' });
            }
        });
        return () => unsubscribe();
    }, []);

    // Hiệu ứng chạy text
    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: -SCREEN_WIDTH,
                    duration: 10000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: SCREEN_WIDTH,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();
        return () => animation.stop();
    }, []);

    // Đăng ký push notification
    useEffect(() => {
        registerForPushNotificationsAsync();
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            Alert.alert(notification.request.content.title, notification.request.content.body);
        });
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });
        return () => {
            if (notificationListener.current) {
                Notifications.removeNotificationSubscription(notificationListener.current);
            }
            if (responseListener.current) {
                Notifications.removeNotificationSubscription(responseListener.current);
            }
        };
    }, []);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image
                        source={{ uri: user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt823sklj0_dEOAH3VzA3SR8ZUVftMdfiylA&s' }}
                        style={styles.avatar}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.greeting}>Xin chào,</Text>
                        <Text style={styles.userName}>{user ? (user.displayName || 'Viruss') : 'Viruss'}</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="notifications" size={24} color="black" style={styles.notificationIcon} />
                        <Badge value="8" status="error" containerStyle={styles.badge} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.iconContainer}>
                    <View style={styles.walletInfo}>
                        <View style={styles.walletRow}>
                            <Text style={styles.walletLabel}>Ví KoHi</Text>
                            <Text style={styles.walletAmount}>{walletBalance.toLocaleString()}đ</Text>
                        </View>
                        <View style={styles.walletRow}>
                            <Text style={styles.walletLabel}>Điểm Thành Viên</Text>
                            <Text style={styles.walletAmount}>409</Text>
                        </View>
                    </View>
                    <View style={styles.iconsRow}>
                        <TouchableOpacity onPress={() => navigation.navigate("ScannerPoint")}>
                            <Ionicons name="scan" size={30} color="black" />
                            <Text style={styles.iconLabel}>Tích điểm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TopUp', { updateWalletBalance })}
                            style={styles.button}
                            activeOpacity={0.7}
                        >
                            <Ionicons name="cash-outline" size={30} color="black" />
                            <Text style={styles.iconLabel}>Nạp Tiền</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("QRPayment")}>
                            <Ionicons name="qr-code-outline" size={30} color="black" />
                            <Text style={styles.iconLabel}>Mã QR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Animated.Text style={[styles.runningText, { transform: [{ translateX: animatedValue }] }]} numberOfLines={1}>
                Chào Mừng Bạn Đến Với KOHI COFFEE!
            </Animated.Text>
             <Image
                source={{ uri: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg' }}
                style={styles.image}
            />
            <View style={{ height: 200, width: '100%' }}>
              <Text style={styles.utilityTitle}>Tiện ích và hỗ trợ nhanh</Text>
                <UtilitySection navigation={navigation} />
            </View>
            {showConfetti && <ConfettiCannon count={200} origin={{ x: SCREEN_WIDTH / 2, y: 0 }} fadeOut />}
        </ScrollView>
    );
}

function UtilitySection({ navigation }) {
    const utilityData = [
        { label: 'Sản Phẩm', icon: 'cart-outline', color: '#2196F3', screen: 'Product' },
        { label: 'Liên hệ hỗ trợ', icon: 'call-outline', color: '#9C27B0', screen: 'SupportCall' },
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
    container: { flex: 1, backgroundColor: '#fff' },
    runningText: { fontSize: 16, fontWeight: 'bold', color: '#ff5733', marginBottom: 10, marginTop: 140, marginLeft: 10 },
    header: { backgroundColor: '#ffdde1', padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd', paddingTop: 30, paddingBottom: 80 },
    userInfo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20, marginTop: 25 },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    badge: { position: 'absolute', top: -5, right: -10, backgroundColor: '#ff4444', minWidth: 16, height: 16, borderRadius: 8 },
    greeting: { fontSize: 14, color: '#333' },
    userName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
    notificationIcon: { marginLeft: 10 },
    cardContainer: {
        position: 'absolute',
        top: 110,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        alignSelf: 'center',
        borderRadius: 35,
        flexDirection: 'row',
    },
    iconContainer: { flex: 1 },
    iconsRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
    iconLabel: { fontSize: 12, color: '#333', textAlign: 'center', marginTop: 5 },
    walletInfo: { backgroundColor: "#fff", borderRadius: 16, padding: 16, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4 },
    walletRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 6 },
    walletLabel: { color: "#6b7280" },
    walletAmount: { fontSize: 18, fontWeight: "bold" },
     utilityContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
    utilityItem: { width: '45%', height: 80, margin: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    utilityText: { color: '#fff', fontWeight: 'bold', marginTop: 5 },
    utilityTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
    
});