import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileInvaSceen({ navigation }) {
  const [name, setName] = useState("phong@mail.com", true);
  const [phone] = useState("0833183077");
  const [dob, setDob] = useState("22 / 11 / 2002");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("Cầu Kênh Chè, Xã Long Thạnh, Huyện Thủ...");
  const [gender, setGender] = useState("Anh");

  // Kiểm tra navigation state
  useEffect(() => {
    console.log(navigation.getState());
  }, []);

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "ProfileScreen" }], // Đảm bảo quay về đúng ProfileScreen
          });
        }}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Quay lại</Text>
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.header}>Thông tin cá nhân</Text>

      {/* Ảnh đại diện */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: "https://i.pravatar.cc/150?img=3" }} style={styles.avatar} />
      </View>

      {/* Chọn giới tính */}
      <View style={styles.genderContainer}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setGender("Anh")}>
          <View style={[styles.radioCircle, gender === "Anh" && styles.radioSelected]} />
          <Text style={styles.radioText}>Anh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setGender("Chị")}>
          <View style={[styles.radioCircle, gender === "Chị" && styles.radioSelected]} />
          <Text style={styles.radioText}>Chị</Text>
        </TouchableOpacity>
      </View>

      {/* Form nhập liệu */}
      <View style={styles.form}>
        <Text style={styles.label}>* Họ và tên</Text>
        <View style={styles.inputContainer}>
          <TextInput value={name} onChangeText={setName} style={styles.input} />
          <Ionicons name="pencil" size={20} color="gray" />
        </View>

        <Text style={styles.label}>* Số điện thoại</Text>
        <View style={styles.inputContainer}>
          <TextInput value={phone} editable={false} style={[styles.input, styles.disabledInput]} />
        </View>

        <Text style={styles.label}>Ngày sinh</Text>
        <View style={styles.inputContainer}>
          <TextInput value={dob} onChangeText={setDob} style={styles.input} />
          <Ionicons name="pencil" size={20} color="gray" />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Nhập email" value={email} onChangeText={setEmail} style={styles.input} />
          <Ionicons name="pencil" size={20} color="gray" />
        </View>

        <Text style={styles.label}>Địa chỉ</Text>
        <View style={styles.inputContainer}>
          <TextInput value={address} onChangeText={setAddress} style={styles.input} />
          <Ionicons name="pencil" size={20} color="gray" />
        </View>
      </View>

      {/* Nút cập nhật */}
      <TouchableOpacity style={styles.updateButton} disabled={true}>
        <Text style={styles.updateText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  backButton: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  backText: { marginLeft: 5, fontSize: 16, color: "#007AFF" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  avatarContainer: { alignItems: "center", marginBottom: 10 },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  genderContainer: { flexDirection: "row", marginBottom: 15 },
  radioButton: { flexDirection: "row", alignItems: "center", marginRight: 20 },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF9500",
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: { backgroundColor: "#FF9500" },
  radioText: { marginLeft: 5, fontSize: 16 },
  form: { width: "100%" },
  label: { fontSize: 14, fontWeight: "bold", marginBottom: 5, color: "#333" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  input: { flex: 1, fontSize: 16, color: "#333" },
  disabledInput: { color: "gray" },
  updateButton: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  updateText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
