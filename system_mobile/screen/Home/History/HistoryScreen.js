import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function HistoryScreen({ navigation }) {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    // const API_HISTORY_URL = process.env.EXPO_PUBLIC_HISTORY_URL;
    const API_HISTORY_URL = "https://coffeeshop.ngrok.app/api/transactions";

    useFocusEffect(
        React.useCallback(() => {
            const fetchTransactions = async () => {
                try {
                    const response = await axios.get(API_HISTORY_URL);
                    console.log('API_HISTORY_URL:', API_HISTORY_URL);
                    console.log(response.data);

                    if (!response.data || !Array.isArray(response.data.transactions)) {
                        throw new Error("Dữ liệu API không hợp lệ");
                    }

                    const formattedData = response.data.transactions.map(item => ({
                        id: item.transactionId.toString(),
                        date: new Date(item.transactionDate).toLocaleDateString(),
                        amount: item.transactionAmount,
                        status: item.transactionAmount < 0 ? "Đã chi tiêu" : "Nạp tiền",
                    }));

                    setTransactions(formattedData);
                } catch (error) {
                    console.error("Lỗi khi lấy dữ liệu: ", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchTransactions();

            return () => {};
        }, [])
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📜 Lịch sử Thanh Toán</Text>
            
            {transactions.length === 0 ? (
                <View style={styles.noTransactionContainer}>
                    <Text style={styles.noTransactionText}>Không có giao dịch nào</Text>
                </View>
            ) : (
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate('HistoryDetail', { transactionId: item.id })}
                        >
                            <Text style={styles.transactionDate}>Ngày: {item.date}</Text>
                            <Text style={styles.transactionAmount}>Số tiền: {item.amount.toLocaleString()}đ</Text>
                            <Text style={[styles.transactionStatus, { color: item.amount < 0 ? "red" : "green" }]}>
                                {item.status}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: '#FFFFCC' 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: 50, 
        marginBottom: 20 
    },
    card: { 
        backgroundColor: '#f1f1f1', 
        padding: 15, 
        borderRadius: 8, 
        marginBottom: 10 
    },
    transactionDate: { 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    transactionAmount: { 
        fontSize: 16, 
        color: '#333', 
        marginTop: 5 
    },
    transactionStatus: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginTop: 5 
    },
    loadingContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    noTransactionContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    noTransactionText: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#888', 
        textAlign: 'center',
        marginBottom: 80
    },
});
