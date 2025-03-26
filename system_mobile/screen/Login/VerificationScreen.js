import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";


export default function VerificationScreen({ navigation }) {
    const [code, setCode] = useState(["", "", "", ""]);
    const correctCode = "1234";

    const handleCodeChange = (text, index) => {
        let newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs[index + 1].focus();
        }
    };




    const handleVerify = () => {
        if (code.join("") === correctCode) {
            Alert.alert("Thành công", "Đăng ký thành công!", [
                { text: "OK", onPress: () => navigation.navigate("Login") }
            ]);
        } else {
            Alert.alert("Lỗi", "Mã xác nhận không đúng. Vui lòng thử lại.");
        }
    };


    let inputs = [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verification Code</Text>
            <Text style={styles.subtitle}>Please enter the code sent to your email.</Text>

            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(input) => (inputs[index] = input)}
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="numeric"
                        value={digit}
                        onChangeText={(text) => handleCodeChange(text, index)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert("Resend Code", "A new code has been sent!")}>
                <Text style={styles.resendText}>
                    Didn't receive a code? <Text style={styles.link}>Resend</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
    subtitle: { textAlign: "center", color: "#666", marginBottom: 20 },
    codeContainer: { flexDirection: "row", justifyContent: "center" },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        textAlign: "center",
        fontSize: 24,
        marginHorizontal: 5,
        borderRadius: 8
    },
    verifyButton: {
        backgroundColor: "#FF5733",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20
    },
    verifyText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
    resendText: { textAlign: "center", marginTop: 20, color: "#666" },
    link: { color: "#FF5733", fontWeight: "bold" }
});
