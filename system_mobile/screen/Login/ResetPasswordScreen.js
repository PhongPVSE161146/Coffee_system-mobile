import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Enter new password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm new password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

// const PhoneRegistrationScreen = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Phone Registration</Text>
//             <TextInput style={styles.input} placeholder="Enter phone number" keyboardType="phone-pad" />
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTPVerification')}>
//                 <Text style={styles.buttonText}>Send OTP</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default ResetPasswordScreen;