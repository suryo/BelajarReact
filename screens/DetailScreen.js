// screens/DetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View>
      <Text>Halaman Detail</Text>
      <Button
        title="Kembali ke Beranda"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
