import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const historyData = [
    { id: '1', date: '12/03/2025', total: '250.000đ', status: 'Đã mua' },
    { id: '2', date: '10/03/2025', total: '500.000đ', status: 'Đã hủy' },
    { id: '3', date: '08/03/2025', total: '150.000đ', status: 'Đang xử lý' },
    { id: '4', date: '12/03/2025', total: '250.000đ', status: 'Đã mua' },
    { id: '5', date: '10/03/2025', total: '500.000đ', status: 'Đã hủy' },
    { id: '6', date: '08/03/2025', total: '150.000đ', status: 'Đang xử lý' },
];

export default function HistoryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📜 Lịch sử Thanh Toán</Text>
            <FlatList
                data={historyData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.date}>Ngày: {item.date}</Text>
                        <Text style={styles.total}>Tổng tiền: {item.total}</Text>
                        <Text style={[styles.status, { color: item.status === 'Đã mua' ? 'green' : item.status === 'Đã hủy' ? 'red' : 'orange' }]}>
                            {item.status}
                        </Text>
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
    date: { fontSize: 16, fontWeight: 'bold' },
    total: { fontSize: 16, color: '#333', marginTop: 5 },
    status: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
});
