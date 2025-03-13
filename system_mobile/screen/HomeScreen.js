import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/anhip.png')} />
                <Text style={styles.productName}>iPhone</Text>
                <Text style={styles.price}>$999</Text>
            </View>

            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/anhmac.png')} />
                <Text style={styles.productName}>MacBook Pro</Text>
                <Text style={styles.price}>$1999</Text>
            </View>

            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/anhipad.png')} />
                <Text style={styles.productName}>iPad Air</Text>
                <Text style={styles.price}>$599</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 56, backgroundColor: '#f2f2f2' },
    card: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 16,
        marginBottom: 12,
        marginTop: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    image: { width: 100, height: 100, marginBottom: 8, marginTop: 8 },
    productName: { fontSize: 18, fontWeight: 'bold' },
    price: { fontSize: 16, color: 'green' },
});
