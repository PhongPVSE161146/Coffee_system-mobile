import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const vouchers = [
    { id: '1', title: 'Giảm 10% cho đơn hàng đầu tiên', code: 'WELCOME10' },
    { id: '2', title: 'Freeship cho đơn hàng trên 200K', code: 'FREESHIP200' },
    { id: '3', title: 'Giảm 50K cho đơn từ 500K', code: 'DISCOUNT50' },
];

export default function VoucherScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎁 Danh sách Voucher</Text>
            <FlatList
                data={vouchers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.voucherTitle}>{item.title}</Text>
                        <Text style={styles.voucherCode}>Mã: {item.code}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    card: { backgroundColor: '#f1f1f1', padding: 15, borderRadius: 8, marginBottom: 10 },
    voucherTitle: { fontSize: 18, fontWeight: 'bold' },
    voucherCode: { fontSize: 16, color: '#FF5733', marginTop: 5 },
});
