import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/colors';

const AhmetButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: Colors.primary500}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default AhmetButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {borderRadius: 28, margin: 4, overflow: 'hidden'},
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {opacity: 0.75},
});
