import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import uuid from 'uuid-random';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import ClearItems from './components/ClearItems';

const App = () => {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };


  const addItem = (text) => {
    if (!text) {
      Alert.alert('Feil', 'Skriv noe før du legger det til!',
        { text: 'OK' });
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  const clearItems = () => {
    setItems(() => { items.map(item => deleteItem(item.id)); });
  };



  return (
    <View style={styles.container}>
      <Header title="Handleliste" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <ListItem
            item={item}
            deleteItem={deleteItem} />}
      />
      <ClearItems clearItems={clearItems} />
    </View>
  );
};

//stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

