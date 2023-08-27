import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

var number = Math.floor(Math.random() * 100) + 1;
var guesses = 0;

export default function App() {

  const [text, SetText] = useState("Guess a number between 1 - 100");
  const [guess, SetGuess] = useState();

  const buttonPressed = () => {
    guesses += 1;
    if (guess < number ) {
      SetText("Your guess " +  guess + " is too low")
    } else if (guess > number) {
      SetText("Your guess " + guess + " is too high")
    } else {
      Alert.alert("You guessed the number in " + guesses + " guesses")
      guesses = 0
      number = Math.floor(Math.random() * 100) + 1;
      SetText("Guess a number between 1 - 100")
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={styles.input} onChangeText={guess => SetGuess(guess)} value={guess}
        keyboardType="numeric" />
      <View style={styles.button} >
        <Button title="Make guess" onPress={buttonPressed} />
      </View>
{/*       <Text>current guess: {guess}</Text>
      <Text>number to be guessed: {number}</Text>
      <Text>number of guesses: {guesses}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 50,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  }
});
