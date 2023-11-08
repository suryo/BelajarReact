// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Halaman Beranda</Text>
      <Button
        title="Buka Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
