import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

//stylesheet
const styles = StyleSheet.create({
    header: {
        height: 70,
        padding: 15,
        backgroundColor: '#205c20',
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Header;
