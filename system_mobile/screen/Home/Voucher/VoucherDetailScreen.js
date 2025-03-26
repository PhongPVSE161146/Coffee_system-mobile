import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function VoucherDetailScreen({ route }) {
    const { voucherId } = route.params;
    const [voucher, setVoucher] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = process.env.EXPO_PUBLIC_URL; // Dùng trực tiếp từ process.env

    useFocusEffect(
        React.useCallback(() => {
            fetchVoucherDetail();
            return () => {};
        }, [voucherId])
    );

    const fetchVoucherDetail = async () => {
        try {
            const response = await axios.get(`${API_URL}/${voucherId}`);
            const data = response.data;

            if (!data || typeof data !== 'object') {
                throw new Error("Dữ liệu trả về từ API không hợp lệ");
            }

            const formattedVoucher = {
                id: data.id?.toString() || voucherId,
                title: data.title || `Giảm ${data.discountAmount || 0}%`,
                code: data.code || 'N/A',
                startDate: data.startDate ? data.startDate.split('T')[0] : 'N/A',
                endDate: data.endDate ? data.endDate.split('T')[0] : 'N/A',
                applicableProducts: data.applicableProducts || 'Không xác định',
                status: data.status || 'Không hoạt động',
                description: data.description || 'Không có mô tả',
            };

            setVoucher(formattedVoucher);
        } catch (error) {
            console.error("Lỗi khi lấy chi tiết voucher: ", error);
            setVoucher(null);
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
            <Text style={styles.title}>🎟 Chi tiết Voucher</Text>
            {voucher ? (
                <View style={styles.card}>
                    <Text style={styles.detail}>Tiêu đề: {voucher.title}</Text>
                    <Text style={styles.detail}>Mã: {voucher.code}</Text>
                    <Text style={styles.detail}>Bắt đầu: {voucher.startDate}</Text>
                    <Text style={styles.detail}>Kết thúc: {voucher.endDate}</Text>
                    <Text style={styles.detail}>Áp dụng cho: {voucher.applicableProducts}</Text>
                    <Text style={styles.detail}>Trạng thái: {voucher.status}</Text>
                    <Text style={styles.detail}>Mô tả: {voucher.description}</Text>
                </View>
            ) : (
                <Text style={styles.errorText}>Không tìm thấy thông tin voucher</Text>
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