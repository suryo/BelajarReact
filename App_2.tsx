/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: 1, name: 'Produk A', image: 'https://example.com/image1.jpg' },
  { id: 2, name: 'Produk B', image: 'https://example.com/image2.jpg' },
  { id: 3, name: 'Produk C', image: 'https://example.com/image3.jpg' },
  // Tambahkan data lainnya
];


function App(): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(filteredData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Pencarian</Text>
      <TextInput
        placeholder="Cari produk"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.input}
      />
      <Button title="Cari" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default App;
