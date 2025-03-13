import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import đúng cách
import { useNavigation } from '@react-navigation/native'; // Import navigation

export default function Profileinva() {
    const navigation = useNavigation(); // Khởi tạo navigation

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // Avatar mẫu
                style={styles.avatar}
            />

            <Text style={styles.username}>Phong</Text>
            <Text style={styles.email}>phong@mail.com</Text>

            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>Tài Khoản</Text>

            <TouchableOpacity
                style={styles.profileButton}
                onPress={() => navigation.navigate('Profileinva')}>
                <Ionicons name="person-circle-outline" size={30} color="white" />
                <Text style={styles.profileText}>Thông Tin Cá Nhân</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    profileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        width: '80%',
        justifyContent: 'center',
    },
    profileText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
});

