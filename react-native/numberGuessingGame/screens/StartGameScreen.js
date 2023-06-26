import {StyleSheet, TextInput, View, Alert, Text} from 'react-native';
import AhmetButton from '../components/AhmetButton';
import {useState} from 'react';
import Colors from '../constants/colors';
import AhmetTitle from '../components/AhmetTitle';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ],
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <AhmetTitle>Guess My Number</AhmetTitle>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={resetInputHandler}>Reset</AhmetButton>
          </View>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={confirmInputHandler}>Confirm</AhmetButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {flex: 1, marginTop: 100, alignItems: 'center'},

  numberInput: {
    textAlign: 'center',
    width: 50,
    height: 65,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
