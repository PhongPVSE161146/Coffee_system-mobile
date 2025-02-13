import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterMenu from '../../FooterMenu/FooterMenu';
import { useNavigation } from "@react-navigation/native";

const menuItems = [
    { name: 'Tổng quan', icon: 'home' },
    { name: 'Báo cáo', icon: 'chart-line' },
    { name: 'Hóa đơn', icon: 'file-invoice' },
    { name: 'Mặt hàng', icon: 'box-open' },
    { name: 'Nhân viên', icon: 'users' },
    { name: 'Khách hàng', icon: 'user-friends' },
    { name: 'Khuyến mãi', icon: 'tags' },
    { name: 'Kho hàng', icon: 'warehouse' },
    { name: 'Thiết lập nhà hàng', icon: 'cogs' }, 
];

const HomeScreen = () => {
    const navigation = useNavigation(); // Khai báo biến navigate

    return (
        <View style={styles.container}>
            {/* Sidebar */}
            <View style={styles.sidebar}>
                <ScrollView contentContainerStyle={styles.sidebarContent}>
                    <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItem}
                            onPress={() => navigation.navigate(item.name)}
                        >
                            <Icon name={item.icon} size={20} color="white" style={styles.icon} />
                            <Text style={styles.menuText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Nội dung chính */}
            <View style={styles.mainContent}>
                <Text style={styles.bodyText}>Welcome to KOHI COFFEE!</Text>
                {/* Nút điều hướng đến màn hình Login */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.backButtonText}>Back to Login</Text>
                </TouchableOpacity>
            </View>

            {/* Footer Menu */}
            <FooterMenu />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    sidebar: {
        width: 250,
        backgroundColor: '#0D2538',
        paddingVertical: 20,
    },
    sidebarContent: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 120,
        resizeMode: "contain",
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    icon: {
        marginRight: 10,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    bodyText: {
        fontSize: 40,
        color: '#007BFF',
    },
    backButton: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
