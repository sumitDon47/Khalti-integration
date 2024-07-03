// KhaltiPayment.js
import React, { useState } from 'react';
import { View, Button, Alert, TextInput, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const KhaltiPayment = ({ navigation }) => {
    const [itemId, setItemId] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');

    const handlePayment = () => {
        axios.post('http://localhost:3001/initialize-khali', {
            itemId,
            totalPrice,
            website_url: websiteUrl,
        })
            .then(response => {
                if (response.data.success) {
                    // Redirect to Khalti payment URL
                    const paymentUrl = response.data.payment.payment_url;
                    navigation.navigate('KhaltiWebView', { url: paymentUrl });
                } else {
                    Alert.alert('Error', 'Payment initialization failed.');
                }
            })
            .catch(error => {
                Alert.alert('Error', error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text>Item ID:</Text>
            <TextInput
                style={styles.input}
                value={itemId}
                onChangeText={setItemId}
                placeholder="Enter Item ID"
            />
            <Text>Total Price:</Text>
            <TextInput
                style={styles.input}
                value={totalPrice}
                onChangeText={setTotalPrice}
                placeholder="Enter Total Price"
                keyboardType="numeric"
            />
            <Text>Website URL:</Text>
            <TextInput
                style={styles.input}
                value={websiteUrl}
                onChangeText={setWebsiteUrl}
                placeholder="Enter Website URL"
            />
            <Button title="Pay with Khalti" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default KhaltiPayment;
