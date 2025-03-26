import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function HistoryDetailScreen({ route, navigation }) {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Chi tiết đơn hàng</Text>
      <Text style={styles.date}>Ngày mua: {order.date}</Text>
      <Text style={styles.total}>Tổng tiền: {order.total}</Text>

      <FlatList
        data={order.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text
                              style={[
                                styles.status,
                                { color: item.status === "Đã mua" ? "green" : item.status === "Đã hủy" ? "red" : "orange" },
                              ]}
                            >
                              {item.status}
                            </Text>
            <View>
              
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>🔙 Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" , marginTop: 40},
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  date: { fontSize: 16, marginBottom: 5 },
  total: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  product: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  image: { width: 50, height: 50, marginRight: 10 },
  productName: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 16, color: "#555" },
  backButton: { marginTop: 20, backgroundColor: "#0E7AFE", padding: 10, borderRadius: 5, alignItems: "center" },
  backButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
