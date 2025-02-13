// components/Footer.js
// import React from "react";
import { View, Text, Image } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
const FooterLogin = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage open/close

    const toggle = () => setIsOpen(!isOpen);

    const [isOpen1, setIsOpen1] = useState(false); // State to manage open/close

    const toggle1 = () => setIsOpen1(!isOpen1);
    return (
        <View style={styles.footer}>
            <Image source={require("../../../img/logocoffee.png")} style={styles.logo} />
            <Text style={styles.text}>
                KOHI COFFEE mong rằng chúng tôi luôn mang đến cho khách hàng những trải
                nghiệm tốt nhất.
            </Text>
            <View style={styles.containerText}>
                <Text style={styles.textNew}>Hệ thống cửa hàng</Text>
                <AntDesign
                    name={isOpen ? 'up' : 'down'} // Toggle between up and down arrows
                    size={20}
                    color="black"
                    onPress={toggle} // Trigger toggle on press
                />
            </View>

            {/* Conditionally render the content when isOpen is true */}
            {isOpen && (
                <View style={styles.positionContainer}>
                    <Text style={styles.positionText}>hẽm 32, Long Trường , TP. Thủ Đức, HCM</Text>
                    <Text style={styles.positionText}>hẽm 12, Phước Long A , TP. Thủ Đức, HCM</Text>

                </View>
            )}
            <View style={styles.containerText}>
                <Text style={styles.textNew}>Liên hệ chúng tôi</Text>
                <AntDesign
                    name={isOpen1 ? 'up' : 'down'} // Toggle between up and down arrows
                    size={20}
                    color="black"
                    onPress={toggle1} // Trigger toggle on press
                />
            </View>
            {isOpen1 && (
                <View style={styles.positionContainer}>
                    <Text style={styles.positionText}>supportkohi@gmail.com</Text>

                </View>
            )}
            <Text style={styles.positionText}>Thứ 2 - Thứ 6: 7am - 10pm
            </Text>
            <Text style={styles.positionText}>Thứ 7 - Chủ nhật: 8am - 9pm</Text>
            <Text style={styles.copyright}>
                @2025 Bản quyền thuộc về KOHI COFFEE
            </Text>
        </View>
    );
};

const styles = {
    footer: {
        padding: 20,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },
    logo: { width: 90, height: 60, marginBottom: 10 },
    containerText: {
        flexDirection: 'row', // Aligns items horizontally
        justifyContent: 'space-between', // Adds space between items
        alignItems: 'center', // Vertically centers the items
    },
    textNew: {
        fontSize: 16,
        justifyContent: 'space-between', // Example text size
    },
    textNew1: {
        fontSize: 16,
        justifyContent: 'space-between', // Example text size
        // Example text size
    },
    copyright: { fontSize: 18, marginTop: 10, color: "gray" },

};

export default FooterLogin;
