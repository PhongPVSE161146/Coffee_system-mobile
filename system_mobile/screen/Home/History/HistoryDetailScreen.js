import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function HistoryDetailScreen({ route }) {
    const { transactionId } = route.params; // Nhận ID từ navigation
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = `https://coffeeshop.ngrok.app/api/transactions/${transactionId}`;

    useFocusEffect(
        React.useCallback(() => {
            fetchTransactionDetail();
        }, [transactionId])
    );

    const fetchTransactionDetail = async () => {
        try {
            const response = await axios.get(API_URL);
            const data = response.data;

            if (!data || typeof data !== 'object') {
                throw new Error("Dữ liệu API không hợp lệ");
            }

            const formattedTransaction = {
                id: data.transactionId.toString(),
                date: new Date(data.transactionDate).toLocaleDateString(),
                amount: data.transactionAmount.toLocaleString() + "đ",
                type: data.transactionAmount < 0 ? "Chi tiêu" : "Nạp tiền",
                status: data.status === 1 ? "Thành công" : "Thất bại",
                walletId: data.walletId,
                orderId: data.orderId,
                paymentId: data.paymentId,
            };

            setTransaction(formattedTransaction);
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết giao dịch: ", error);
            setTransaction(null);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📜 Chi tiết Giao dịch</Text>
            {transaction ? (
                <View style={styles.card}>
                    <Text style={styles.detail}>Mã giao dịch: {transaction.id}</Text>
                    <Text style={styles.detail}>Ngày: {transaction.date}</Text>
                    <Text style={styles.detail}>Số tiền: {transaction.amount}</Text>
                    <Text style={styles.detail}>Loại giao dịch: {transaction.type}</Text>
                    <Text style={styles.detail}>Trạng thái: {transaction.status}</Text>
                    <Text style={styles.detail}>Mã ví: {transaction.walletId}</Text>
                    <Text style={styles.detail}>Mã đơn hàng: {transaction.orderId}</Text>
                    <Text style={styles.detail}>Mã thanh toán: {transaction.paymentId}</Text>
                </View>
            ) : (
                <Text style={styles.errorText}>Không tìm thấy thông tin giao dịch</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#f1f1f1',
        padding: 20,
        borderRadius: 8,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
