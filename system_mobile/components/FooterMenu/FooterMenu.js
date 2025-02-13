import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FooterMenu = ({ navigation }) => {
    const menuItems = [
        { name: 'Expresso', icon: 'coffee', route: 'ExpressoScreen' },
        { name: 'Americano', icon: 'coffee', route: 'AmericanoScreen' },
        { name: 'Latte', icon: 'coffee', route: 'LatteScreen' },
        { name: 'Cappuccino', icon: 'coffee', route: 'CappuccinoScreen' },
        { name: 'Mocha', icon: 'coffee', route: 'MochaScreen' }
    ];

    return (
        <View style={styles.footermenu}>
            {menuItems.map((item, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.menuItem} 
                    onPress={() => navigation.navigate(item.route)}
                >
                    <Icon name={item.icon} size={24} color="#fff" />
                    <Text style={styles.menuText}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    footermenu: {
        position: 'absolute',
        bottom: 0,
        left: 250, // Cộng với chiều rộng sidebar
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    menuItem: {
        alignItems: 'center',
    },
    menuText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 4,
    },
});

export default FooterMenu;
