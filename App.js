import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import * as Speech from 'expo-speech';

export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
      name: ''
    }
  }

  speak=()=>{
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  }

  render()
  {
    return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        onChangeText={(userText) => {
              this.setState({ name: userText });
            }}
            value={this.state.name}
            style={styles.inputBox}
      />
      <TouchableOpacity
            style={styles.goButton}
            onPress={() => {this.speak()}}>
            <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 4,
    width: '80%',
    height: 40,
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center',
  },
  goButton: {
    width: 65,
    height: 65,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'seashell',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
