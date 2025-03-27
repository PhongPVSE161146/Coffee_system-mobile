import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function ProductDetailScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { productId } = route.params; // Lấy ID từ navigation
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`https://coffeeshop.ngrok.app/api/products/${productId}`);
                console.log("Chi tiết sản phẩm:", response.data);
                setProduct(response.data);
            } catch (err) {
                console.error("Lỗi khi lấy chi tiết sản phẩm:", err);
                setError("Không thể tải dữ liệu sản phẩm!");
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [productId]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ff4500" />
                <Text>Đang tải chi tiết sản phẩm...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (!product) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Sản phẩm không tồn tại!</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.card}>
            <Image 
    source={{ 
        uri: product.path 
            ? `https://coffeeshop.ngrok.app${product.path}` 
            : "https://lh6.googleusercontent.com/proxy/Odb2G7r3-XLHoW9CARCU6Ma7JXbmdGgmp-YDsHdjvzzSl0KKWobrlqnYXD_KANlabk0F-65TLTILYmnpJ_ilpvevucWfA22o9y5DAU1vkIhgB3nn"
    }} 
    style={styles.image} 
/>

                <View style={styles.cardContent}>
                    <Text style={styles.title}>{product.productName}</Text>
                    <Text style={styles.price}>{product.price} VNĐ</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
    
    // Nút Quay Lại
    backButton: { marginBottom: 10, padding: 10 },
    backText: { fontSize: 16, color: "#ff4500", fontWeight: "bold" },

    // Card chứa thông tin sản phẩm
    card: { 
        backgroundColor: "white", 
        borderRadius: 12, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 20
    },
    image: { 
        width: "100%", 
        height: 250, 
        resizeMode: "cover", 
        borderTopLeftRadius: 12, 
        borderTopRightRadius: 12 
    },
    cardContent: { padding: 15 },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 5, marginLeft:90 },
    price: { fontSize: 20, color: "green", fontWeight: "bold", marginBottom: 10, marginLeft:90 },
    description: { fontSize: 16, textAlign: "justify", color: "#666", marginLeft: 20 },

    // Loading & Error
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    errorText: { fontSize: 18, color: "red", fontWeight: "bold" },
});
