// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// // Cấu hình Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDGzQXRNj63M30ZM3eqz3oSRIUeQv5o8Z4",
//     authDomain: "hjkhbjj-256b1.firebaseapp.com",
//     projectId: "hjkhbjj-256b1",
//     storageBucket: "hjkhbjj-256b1.firebasestorage.app",
//     messagingSenderId: "1094485118126",
//     appId: "1:1094485118126:web:e1e7ce00f647ba8da6b13f",
//     measurementId: "G-JC48VE3ZHM"
// };

// // Khởi tạo Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// // Hàm lấy FCM Token
// export const requestForToken = async () => {
//     try {
//         const token = await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY_HERE" });
//         if (token) {
//             console.log("FCM Token:", token);
//             return token;
//         } else {
//             console.log("Không lấy được token, hãy kiểm tra lại quyền thông báo.");
//         }
//     } catch (error) {
//         console.error("Lỗi khi lấy token:", error);
//     }
// };

// // Lắng nghe thông báo foreground
// export const onMessageListener = () =>
//     new Promise((resolve) => {
//         onMessage(messaging, (payload) => {
//             console.log("Thông báo foreground:", payload);
//             resolve(payload);
//         });
//     });
