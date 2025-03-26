import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PermissionRequest({ requestPermission }) {
    return (
        <View style={styles.container}>
            <Text style={styles.permissionText}>Camera access is required to scan QR codes.</Text>
            <Pressable style={styles.button} onPress={requestPermission}>
                <Text style={styles.buttonText}>Grant Permission</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    permissionText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0E7AFE",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
