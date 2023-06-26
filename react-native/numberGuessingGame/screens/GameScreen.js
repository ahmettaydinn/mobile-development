import {Alert, StyleSheet, Text, View} from 'react-native';
import AhmetButton from '../components/AhmetButton';
import AhmetTitle from '../components/AhmetTitle';
import Colors from '../constants/colors';
import generateRandomBetween from '../utils/generateRandom';
import NumberContainer from '../components/NumberContainer';
import {useEffect, useState} from 'react';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function GameScreen({userNumber, onGameOver}) {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('do not lie', 'bitch', [{text: 'Sorry', style: 'cancel'}]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(1, 100, currentGuess);
    setCurrentGuess(newRandomNumber);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <AhmetTitle>Opponent's guess</AhmetTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Greater or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </AhmetButton>
          </View>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={nextGuessHandler.bind(this, 'greater')}>
              +
            </AhmetButton>
          </View>
        </View>
      </Card>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 12},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instructionText: {margin: 12},
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
