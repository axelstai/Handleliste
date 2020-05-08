import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useState } from 'react';

const ListItem = ({ item, deleteItem }) => {
    const [clicked, isClicked] = useState(false);
    const press = () => {
        isClicked(() => {
            if (clicked) {
                return false;
            } else {
                return true;
            }
        });
    };

    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={press}>
            <View style={styles.listItemView}>
                <Text style={clicked ? styles.listItemPressed : styles.listItemText}>{item.text}</Text>
                <Icon name="remove" size={30} color="#e8544f"
                    onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    );
};

//stylesheet
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#e4f5e4',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    listItemText: {
        fontSize: 18,
    },
    listItemPressed: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationColor: 'red',
        textDecorationStyle: 'double',
    },
});

export default ListItem;
