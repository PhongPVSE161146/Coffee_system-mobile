import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const historyData = [
    {
      id: "1",
      date: "12/03/2025",
      total: "250.000đ",
      status: "Đã mua",
      products: [
        { id: "p1", name: "Cà phê đen", price: "50.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p2", name: "Trà xanh", price: "40.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "2",
      date: "10/03/2025",
      total: "500.000đ",
      status: "Đã hủy",
      products: [
        { id: "p3", name: "Cà phê sữa", price: "60.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "3",
      date: "08/03/2025",
      total: "150.000đ",
      status: "Đang xử lý",
      products: [
        { id: "p4", name: "Espresso", price: "70.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p5", name: "Cà phê Mocha", price: "80.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "4",
      date: "05/03/2025",
      total: "300.000đ",
      status: "Đã mua",
      products: [
        { id: "p6", name: "Trà sữa", price: "90.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p7", name: "Cà phê latte", price: "110.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "5",
      date: "02/03/2025",
      total: "450.000đ",
      status: "Đã hủy",
      products: [
        { id: "p8", name: "Trà chanh", price: "30.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p9", name: "Trà gừng", price: "35.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p10", name: "Cà phê bạc xỉu", price: "50.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "6",
      date: "28/02/2025",
      total: "120.000đ",
      status: "Đã mua",
      products: [
        { id: "p11", name: "Trà đào cam sả", price: "60.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p12", name: "Cà phê Capuchino", price: "60.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "7",
      date: "25/02/2025",
      total: "350.000đ",
      status: "Đang xử lý",
      products: [
        { id: "p13", name: "Sinh tố xoài", price: "100.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p14", name: "Sinh tố dâu", price: "120.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p15", name: "Cà phê đá xay", price: "130.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "8",
      date: "20/02/2025",
      total: "200.000đ",
      status: "Đã mua",
      products: [
        { id: "p16", name: "Trà Oolong", price: "90.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p17", name: "Matcha Latte", price: "110.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "9",
      date: "15/02/2025",
      total: "180.000đ",
      status: "Đã mua",
      products: [
        { id: "p18", name: "Trà sữa khoai môn", price: "80.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p19", name: "Trà sữa matcha", price: "100.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
    {
      id: "10",
      date: "10/02/2025",
      total: "250.000đ",
      status: "Đã hủy",
      products: [
        { id: "p20", name: "Cà phê Americano", price: "90.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p21", name: "Trà gạo lứt", price: "60.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
        { id: "p22", name: "Sinh tố chuối", price: "100.000đ", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
      ],
    },
  ];
  

export default function HistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Lịch sử Thanh Toán</Text>
      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("HistoryDetail", { order: item })}
          >
            <Text style={styles.date}>Ngày: {item.date}</Text>
            <Text style={styles.total}>Tổng tiền: {item.total}</Text>
            <Text
              style={[
                styles.status,
                { color: item.status === "Đã mua" ? "green" : item.status === "Đã hủy" ? "red" : "orange" },
              ]}
            >
              {item.status}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFFFCC" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10, marginTop: 50 },
  card: { backgroundColor: "#f1f1f1", padding: 15, borderRadius: 8, marginBottom: 10 },
  date: { fontSize: 16, fontWeight: "bold" },
  total: { fontSize: 16, color: "#333", marginTop: 5 },
  status: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
});
