import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CameraView } from "expo-camera";

export default function QRScanner({ qrLock }) {
    const handleBarcodeScanned = ({ data }) => {
        if (data && !qrLock.current) {
            qrLock.current = true;
            Alert.alert(
                "QR Code Scanned",
                `URL: ${data}`,
                [
                    { text: "Cancel", style: "cancel", onPress: () => (qrLock.current = false) },
                    { text: "Open Link", onPress: () => Linking.openURL(data) },
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <View style={styles.container}>
            <CameraView style={StyleSheet.absoluteFillObject} facing="back" onBarcodeScanned={handleBarcodeScanned} />
            <View style={styles.scanArea}>
                <Image 
                    source={require("../img/qr.png")} // Đặt ảnh QR code vào assets và thay đổi đường dẫn
                    style={styles.qrImage} 
                    resizeMode="contain" 
                />
               
            </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scanArea: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    qrImage: {
        width: "100%", 
        height: "100%", 
    },
    scanText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginTop: 10, 
    },
});
