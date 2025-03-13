import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.text}>Welcome, User!</Text>
            <Button title="Edit Profile" onPress={() => alert('Edit Profile')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
    text: { fontSize: 16, color: 'gray', marginBottom: 20 },
});
