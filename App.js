import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function App() {
  const [buttons, setButtons] = useState([
    { name: 'MusicGen', url: 'https://huggingface.co/spaces/asigalov61/Melody2Song-Seq2Seq-Music-Transformer' },
  ]);

  const [newButtonName, setNewButtonName] = useState('');
  const [newButtonUrl, setNewButtonUrl] = useState('');

  const addButton = () => {
    if (newButtonName && newButtonUrl) {
      setButtons([...buttons, { name: newButtonName, url: newButtonUrl }]);
      setNewButtonName('');
      setNewButtonUrl('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dynamic Button Links</Text>

      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => Linking.openURL(button.url)}
          >
            <Text style={styles.buttonText}>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Button Name"
          value={newButtonName}
          onChangeText={(text) => setNewButtonName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Button URL"
          value={newButtonUrl}
          onChangeText={(text) => setNewButtonUrl(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addButton}>
          <Text style={styles.addButtonText}>Add Button</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#008CBA',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

