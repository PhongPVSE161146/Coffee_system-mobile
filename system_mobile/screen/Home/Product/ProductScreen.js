import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const categories = [
    { id: "1", name: "Tea", screen: "TeaScreen", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Qaf3MygVHMyFO6KXjwR_H9d0_gNEVmlqPA&s" },
    { id: "2", name: "Coffee", screen: "CoffeeScreen", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6N9CNXNfmqC-xZbj9bD9YHeCC-CdfWyFsg&s" },    
];

export default function ProductScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sản Phẩm</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.name)}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                numColumns={2}
            />
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
    },
    image: { width: "100%", height: 120, resizeMode: "cover" },
    title: { fontSize: 18, fontWeight: "bold", padding: 10, textAlign: "center" },
});
