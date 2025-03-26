import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TopUpScreen = ({ navigation, route }) => {
    const [amount, setAmount] = useState('');
    const { updateWalletBalance } = route.params || {}; // Lấy hàm từ params

    const handleTopUp = () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert('Vui lòng nhập số tiền hợp lệ!');
            return;
        }

        const topUpAmount = Number(amount);
        if (updateWalletBalance) {
            updateWalletBalance(topUpAmount); // Cộng tiền vào ví
            setAmount(''); // Reset input sau khi nạp
        }
    };

    const handleQuickAmount = (value) => {
        setAmount(value.toString());
        // if (updateWalletBalance) {
        //     updateWalletBalance(value); // Cộng tiền ngay khi chọn
        // }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nạp tiền</Text>

            {/* Nhập số tiền */}
            <TextInput
                style={styles.input}
                placeholder="Nhập số tiền"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            {/* Chọn nhanh số tiền */}
            <View style={styles.quickAmountContainer}>
                {[50000, 100000, 200000, 500000].map(value => (
                    <TouchableOpacity
                        key={value}
                        style={styles.quickAmountButton}
                        onPress={() => handleQuickAmount(value)}
                    >
                        <Text style={styles.quickAmountText}>{value.toLocaleString()}đ</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Xác nhận nạp */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleTopUp}>
                <Text style={styles.confirmText}>Xác nhận nạp tiền</Text>
            </TouchableOpacity>

            {/* Nút quay lại HomePage */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>Quay lại</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, fontSize: 18, marginBottom: 15 },
    quickAmountContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    quickAmountButton: { backgroundColor: '#f0f0f0', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8 },
    quickAmountText: { fontSize: 16, fontWeight: 'bold' },
    confirmButton: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
    confirmText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
    backButton: { padding: 15, borderRadius: 10, alignItems: 'center', backgroundColor: '#ccc' },
    backText: { fontSize: 18, color: '#333', fontWeight: 'bold' },
});

export default TopUpScreen;