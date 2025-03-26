import messaging from '@react-native-firebase/messaging';

// Yêu cầu quyền thông báo từ người dùng
export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Quyền thông báo được cấp:', authStatus);
    } else {
        console.log('Người dùng từ chối quyền thông báo');
    }
}

// Lấy FCM Token
export async function getFCMToken() {
    try {
        const token = await messaging().getToken();
        console.log("FCM Token:", token);
        return token;
    } catch (error) {
        console.error("Lỗi lấy token:", error);
    }
}

// Lắng nghe thông báo foreground
export function onMessageListener() {
    return messaging().onMessage(async remoteMessage => {
        console.log('Thông báo foreground:', remoteMessage);
        alert(`📢 Thông báo mới: ${remoteMessage.notification?.body}`);
    });
}
