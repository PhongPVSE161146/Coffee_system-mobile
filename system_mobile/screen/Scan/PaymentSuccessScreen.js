import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentSuccessScreen({ navigation }) {
    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        const orderDate = new Date(); // Lấy thời gian hiện tại
        const pickupTime = new Date(orderDate.getTime() + 5 * 60000); // Cộng thêm 5 phút

        setTimeout(() => {
            setPaymentInfo({
                orderId: Math.floor(100000 + Math.random() * 900000),
                productName:"Cà Phê",  // Random mã đơn hàng
                amount: "45.000 VND",
                orderDate: orderDate.toLocaleTimeString(),
                pickupTime: pickupTime.toLocaleTimeString(),
                paymentMethod: "Ví KoHi",
                status: "Thành công" ? "Thành công" : "Thất bại",
            });
        }, 1000);
    }, []);

    return (
        <View style={styles.container}>
            {/* Icon Thành công */}
            <View style={styles.successIconContainer}>
                <Ionicons name="checkmark-circle" size={80} color="#28a745" />
            </View>

            {/* Thông tin thanh toán */}
            <View style={styles.billContainer}>
                <Text style={styles.title}>Thanh toán thành công!</Text>

                {paymentInfo ? (
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>🆔 Mã đơn hàng: {paymentInfo.orderId}</Text>
                        <Text style={styles.infoText}>☕ Sản Phẩm: {paymentInfo.productName}</Text>
                        <Text style={styles.infoText}>💰 Số tiền: {paymentInfo.amount}</Text>
                        <Text style={styles.infoText}>📅 Thời gian đặt hàng: {paymentInfo.orderDate}</Text>
                        <Text style={styles.infoText}>⏳ Thời gian ước Tính: {paymentInfo.pickupTime}</Text>
                        <Text style={styles.infoText}>💳 Phương thức: {paymentInfo.paymentMethod}</Text>
                        <Text style={styles.infoText}>✅ Trạng Thái: {paymentInfo.status}</Text>
                    </View>
                ) : (
                    <Text style={styles.loadingText}>Đang xử lý đơn hàng...</Text>
                )}

                {/* Nút quay về trang chủ */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomePage")}>
                    <Text style={styles.buttonText}>Quay về Trang chủ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        justifyContent: "center",
        alignItems: "center",
    },
    successIconContainer: {
        position: "absolute",
        top: 80,
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        elevation: 5,
    },
    billContainer: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#28a745",
        marginBottom: 10,
    },
    infoContainer: {
        width: "100%",
        backgroundColor: "#e9ecef",
        padding: 19,
        borderRadius: 10,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
        padding: 5,
    },
    loadingText: {
        fontSize: 16,
        fontStyle: "italic",
        color: "gray",
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
