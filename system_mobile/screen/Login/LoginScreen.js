import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // 🔐 Tài khoản cứng
    const hardcodedEmail = "t@e.com";
    const hardcodedPassword = "123456";

    // ✅ Xử lý đăng nhập
    const handleLogin = () => {
        if (!email || !password) {
            setError("Vui lòng nhập email và mật khẩu!");
            return;
        }

        if (email !== hardcodedEmail || password !== hardcodedPassword) {
            setError("Email hoặc mật khẩu không chính xác!");
            return;
        }

        // Đăng nhập thành công
        Alert.alert("Đăng nhập thành công!", "Chào mừng bạn quay lại.");
        navigation.navigate("HomePage");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng Nhập</Text>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    setError(""); // Xóa lỗi khi nhập lại
                }}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                value={password}
                onChangeText={(text) => {
                    setPassword(text);
                    setError(""); // Xóa lỗi khi nhập lại
                }}
                secureTextEntry
            />

            <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
                <Text style={styles.forgotText}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.footerText}>
                    Bạn chưa có tài khoản? <Text style={styles.link}>Đăng ký</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

// 🎨 **Styles**
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    errorText: { color: "red", textAlign: "center", marginBottom: 10 },
    input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginBottom: 15 },
    forgotText: { textAlign: "right", color: "#FF5733", marginBottom: 10 },
    button: { backgroundColor: "#FF5733", paddingVertical: 12, borderRadius: 8, alignItems: "center" },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    footerText: { marginTop: 20, fontSize: 14, textAlign: "center", color: "#666" },
    link: { color: "#FF5733", fontWeight: "bold" }
});

