import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const coffeeCategories = [
    {
        category: "Cà Phê Đen",
        data: [
            { id: "1", name: "Espresso", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg", price: "30,000đ" },
            { id: "2", name: "Americano", image: "https://bizweb.dktcdn.net/100/270/753/files/su-khac-nhau-giua-cafe-espresso-va-capuchino-2.png?v=1728701941913", price: "35,000đ" },
        ],
    },
    {
        category: "Cà Phê Sữa",
        data: [
            { id: "3", name: "Cà Phê Sữa Đá", image: "https://cubes-asia.com/storage/blogs/2024-12/5-cach-pha-ca-phe-sua-tuoi-khong-duong-co.jpeg", price: "25,000đ" },
            { id: "4", name: "Latte", image: "https://classiccoffee.com.vn/files/common/uong-ca-phe-sua-moi-ngay-co-tot-khong-rmn8y.png", price: "40,000đ" },
        ],
    },
    {
        category: "Cà Phê Pha Máy",
        data: [
            { id: "5", name: "Cappuccino", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKfSO7jBQkSilZKoQB4VPYVRCcRpgt2lb7w&s", price: "45,000đ" },
            { id: "6", name: "Mocha", image: "https://quangtanhoa.com/wp-content/uploads/2018/07/nguyen-ly-may-pha-ca-phe.jpg", price: "50,000đ" },
        ],
    },
    {
        category: "Cà Phê Phin",
        data: [
            { id: "7", name: "Cà Phê Phin Đen", image: "https://vinbarista.com/uploads/editer/images/1.jpg", price: "20,000đ" },
            { id: "8", name: "Cà Phê Phin Sữa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGp4xzfqfqsMdg5HgU8b-2x5uDbS24ILE8g&s", price: "25,000đ" },
        ],
    },
];

const CoffeeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={coffeeCategories}
                keyExtractor={(item) => item.category}
                renderItem={({ item }) => (
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>{item.category}</Text>
                        <FlatList
                            data={item.data}
                            keyExtractor={(subItem) => subItem.id}
                            numColumns={2} // Hiển thị 2 cột
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            )}
                        />
                    </View>
                )}
                showsVerticalScrollIndicator={false} // Ẩn thanh cuộn
            />
        </View>
    );
};

export default CoffeeScreen;

const { width } = Dimensions.get("window"); // Lấy chiều rộng màn hình

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
    categoryContainer: { marginBottom: 20 },
    categoryTitle: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Bóng trên Android
        alignItems: "center",
    },
    image: {
        width: width * 0.4, // 40% chiều rộng màn hình
        height: 150,
        borderRadius: 10,
        resizeMode: "cover",
    },
    title: { fontSize: 16, fontWeight: "bold", paddingVertical: 5 },
    price: { fontSize: 14, color: "#888" },
});
