import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity }
    from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Legg til vare..."
                style={styles.input}
                onChangeText={val => { setText(val); }}
                value={text}
            />

            <TouchableOpacity style={styles.btn} onPress={() => {
                addItem(text);
                setText('');
            }}>
                <Text style={styles.btnText}>{<Icon name="plus" />} Legg til</Text>
            </TouchableOpacity>
        </View>
    );
};

//stylesheet
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#539453',
        padding: 10,
        margin: 20,
        borderRadius: 30,

    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

});

export default AddItem;
