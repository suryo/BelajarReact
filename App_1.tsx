/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';




function App(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleButtonPress = () => {
    setOutputText(inputText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Masukkan Teks:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Tampilkan Teks" onPress={handleButtonPress} />
      <Text style={styles.output}>{outputText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  output: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
