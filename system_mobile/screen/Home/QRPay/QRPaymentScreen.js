import React, { useRef, useEffect, useState } from "react";
import { View, AppState, Alert, StatusBar, Pressable, StyleSheet, Platform, Text} from "react-native";
import {  useCameraPermissions } from "expo-camera";
import QRScanner from "../../../components/QRScanner";

import PermissionRequest from "../../../components/PermissionRequest";
import LoadingScreen from "../../../components/LoadingScreen";

export default function QRPaymentScreen({ navigation }) {
    const qrLock = useRef(false);
    const appState = useRef(AppState.currentState);
    const [hasPermission, requestPermission] = useCameraPermissions();
    const [isLoading, setIsLoading] = useState(true);

    // Kiểm tra quyền camera
    useEffect(() => {
        (async () => {
            if (!hasPermission) {
                await requestPermission();
            }
            setIsLoading(false);
        })();
    }, [hasPermission]);

    // Reset trạng thái quét khi quay lại ứng dụng
    useEffect(() => {
        const subscription = AppState.addEventListener("change", (nextAppState) => {
            if (appState.current.match(/inactive|background/) && nextAppState === "active") {
                qrLock.current = false;
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
        };
    }, []);

    if (isLoading) return <LoadingScreen />;
    if (!hasPermission?.granted) return <PermissionRequest requestPermission={requestPermission} />;

    return (
        <View style={styles.container}>
          
            {Platform.OS === "android" ? <StatusBar hidden /> : null}
            <QRScanner qrLock={qrLock} />
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Go Back</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        bottom: 50,
        backgroundColor: "#0E7AFE",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    backButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
