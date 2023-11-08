/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const data = [
  { id: 1, name: 'Produk A', image: 'https://example.com/image1.jpg' },
  { id: 2, name: 'Produk B', image: 'https://example.com/image2.jpg' },
  { id: 3, name: 'Produk C', image: 'https://example.com/image3.jpg' },
  // Tambahkan data lainnya
];

const Stack = createStackNavigator();

function App(): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(filteredData);
  };

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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
