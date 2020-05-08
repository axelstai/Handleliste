import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ClearItems = ({ clearItems }) => {

    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => {
                clearItems();
            }}>
                <Text style={styles.btnText}>{<Icon name="plus" />} Slett liste</Text>
            </TouchableOpacity>
        </View>
    );
};

//stylesheet
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#e8544f',
        color: 'white',
        padding: 10,
        margin: 20,
        marginBottom: 40,
        borderRadius: 30,


    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
});

export default ClearItems;
