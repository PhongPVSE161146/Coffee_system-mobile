import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignUpScreen({ navigation }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput style={styles.input} placeholder="Full name" value={fullName} onChangeText={setFullName} />
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Verification")}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.footerText}>Already have an account? <Text style={styles.link}>Login</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginBottom: 15 },
    button: { backgroundColor: "#FF5733", paddingVertical: 12, borderRadius: 8, alignItems: "center" },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    footerText: { marginTop: 20, fontSize: 14, textAlign: "center", color: "#666" },
    link: { color: "#FF5733", fontWeight: "bold" }
}); 