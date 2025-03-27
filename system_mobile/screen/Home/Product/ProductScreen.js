import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function ProductScreen() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://coffeeshop.ngrok.app/api/products");
                console.log("Dữ liệu từ API:", response.data); 
                
                if (response.data && Array.isArray(response.data.products)) {
                    setProducts(response.data.products);
                } else {
                    setError("Dữ liệu không hợp lệ!");
                }
            } catch (err) {
                console.error("Lỗi khi lấy sản phẩm:", err);
                setError("Không thể tải dữ liệu!");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ff4500" />
                <Text>Đang tải sản phẩm...</Text>
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

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sản Phẩm</Text>
            {products.length === 0 ? (
                <Text style={styles.emptyText}>Không có sản phẩm nào!</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.productId.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.card} 
                            onPress={() => navigation.navigate("ProductDetail", { productId: item.productId })}
                        >
                            <Image 
                                source={{ 
                                    uri: item.path 
                                        ? `https://coffeeshop.ngrok.app${item.path}`
                                        : "https://lh6.googleusercontent.com/proxy/Odb2G7r3-XLHoW9CARCU6Ma7JXbmdGgmp-YDsHdjvzzSl0KKWobrlqnYXD_KANlabk0F-65TLTILYmnpJ_ilpvevucWfA22o9y5DAU1vkIhgB3nn"
                                }} 
                                style={styles.image} 
                            />
                            <Text style={styles.title}>{item.productName}</Text>
                            <Text style={styles.price}>{item.price ? `${item.price} VNĐ` : "Giá không có sẵn"}</Text>
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
    header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 5,
        alignItems: "center",
        paddingBottom: 10,
    },
    image: { width: "100%", height: 120, resizeMode: "cover" },
    title: { fontSize: 18, fontWeight: "bold", padding: 5, textAlign: "center" },
    price: { fontSize: 16, color: "green", fontWeight: "bold", textAlign: "center" },
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    errorText: { fontSize: 18, color: "red", fontWeight: "bold" },
    emptyText: { textAlign: "center", fontSize: 18, marginTop: 20 },
});
