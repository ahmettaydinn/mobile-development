import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import AhmetButton from '../components/AhmetButton';
import AhmetTitle from '../components/AhmetTitle';
import Colors from '../constants/colors';
import generateRandomBetween from '../utils/generateRandom';
import NumberContainer from '../components/NumberContainer';
import {useEffect, useState} from 'react';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GuessLogItem from '../components/GuessLogItem';

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const {width, height} = useWindowDimensions();

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
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds(prev => [newRandomNumber, ...prev]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      {content}
      <Card>
        <InstructionText style={styles.instructionText}>
          Greater or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color={'white'} />
            </AhmetButton>
          </View>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color={'white'} />
            </AhmetButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsWideContainer}>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color={'white'} />
            </AhmetButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <AhmetButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color={'white'} />
            </AhmetButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <AhmetTitle>Opponent's guess</AhmetTitle>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 12, alignItems: 'center'},
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
  listContainer: {flex: 1, padding: 16},
  buttonsWideContainer: {flexDirection: 'row', alignItems: 'center'},
});

export default GameScreen;
