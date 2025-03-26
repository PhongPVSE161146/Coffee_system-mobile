import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import các màn hình
import HomePageScreen from '../screen/Home/HomePageScreen';
import VoucherScreen from '../screen/Home/VoucherScreen';
import HistoryScreen from '../screen/Home/HistoryScreen';
import ProfileScreen from '../screen/Home/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const navigation = useNavigation(); // ✅ Lấy navigation từ useNavigation

    const handleLogout = () => {
        Alert.alert(
            "Đăng xuất",
            "Bạn có chắc chắn muốn đăng xuất không?",
            [
                { text: "Hủy", style: "cancel" },
                {
                    text: "Đăng xuất",
                    onPress: () => {
                        navigation.replace("Login"); // ✅ Quay về màn hình Login
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerStyle: { backgroundColor: '#4CAF50' },
                headerTintColor: '#fff',
                headerRight: () => (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {/* Nút Thông báo */}


                        {/* Nút Logout */}
                        <TouchableOpacity onPress={handleLogout}>
                            <Ionicons
                                name="log-out-outline"
                                size={24}
                                color="white"
                                style={{ marginRight: 15 }}
                            />
                        </TouchableOpacity>
                    </View>
                ),
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Voucher') {
                        iconName = 'gift'; // 🎁 Icon Voucher
                    } else if (route.name === 'History') {
                        iconName = 'time'; // ⏳ Icon Lịch sử
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#4CAF50',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomePageScreen} />
            <Tab.Screen name="Voucher" component={VoucherScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
