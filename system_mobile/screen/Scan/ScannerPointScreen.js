import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CameraView } from "expo-camera";
// import { Ionicons } from "@expo/vector-icons";

export default function ScannerPointScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Camera View */}
      <CameraView style={StyleSheet.absoluteFillObject} facing="back" />

      {/* QR Scan Frame */}
      <View style={styles.scanFrame}>
        <Text style={styles.scanText}>Đưa mã QR vào khung Để Tích Điểm</Text>
      </View>

      {/* Payment QR Code */}
      <View style={styles.qrContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.qrImage}
        />
        <Text style={styles.qrText}>Quét để tích điểm</Text>
      </View>
      
      {/* Payment Button */}
      <TouchableOpacity 
    style={styles.payButton} 
    onPress={() => { 
        alert("Tích Điểm thành công!"); 
        navigation.navigate("PaymentSuccess"); 
    }}
>
    <Text style={styles.payButtonText}>Tích Điểm</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  scanFrame: {
    width: 250, 
    height: 250, 
    borderWidth: 2, 
    borderColor: "white", 
    borderRadius: 10, 
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },
  scanText: {
    color: "white",
    fontSize: 16,
    textAlign: "center", // Căn giữa text theo chiều ngang
    paddingHorizontal: 10, // Thêm padding để text không bị sát mép
  },
  qrContainer: {
    position: "absolute",
    bottom: "25%",
    alignItems: "center",
  },
  qrImage: {
    width: 150,
    height: 150,
  },
  qrText: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },
  payButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0E7AFE",
    padding: 15,
    borderRadius: 10,
    position: "absolute",
    bottom: "10%",
  },
  payText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
});
