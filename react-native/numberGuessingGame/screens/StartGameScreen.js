import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import AhmetButton from '../components/AhmetButton';
import {useState} from 'react';
import Colors from '../constants/colors';
import AhmetTitle from '../components/AhmetTitle';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function StartGameScreen({onPickNumber}) {
  const {width, height} = useWindowDimensions();

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

  const marginTopDistance = height < 400 ? 30 : 100;

  console.log(marginTopDistance);

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },

  screen: {flex: 1},

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
