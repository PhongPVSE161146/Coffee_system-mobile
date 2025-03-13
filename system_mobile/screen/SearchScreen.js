// screens/SearchScreen.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search</Text>
            <TextInput
                style={styles.searchBox}
                placeholder="Search for products..."
            />
            <Text style={styles.resultText}>Search results will appear here</Text>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
    searchBox: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    resultText: { fontSize: 16, color: 'gray', textAlign: 'center' },
});
