import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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

const Sidebar = ({ navigation }) => {
  return (
    <ScrollView style={styles.sidebar}>
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
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  sidebar: { backgroundColor: '#0D2538', flex: 1, paddingVertical: 20 },
  logo: { width: 250, height: 150, resizeMode: 'contain', marginBottom: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  icon: { marginRight: 10 },
  menuText: { color: 'white', fontSize: 16 },
});
