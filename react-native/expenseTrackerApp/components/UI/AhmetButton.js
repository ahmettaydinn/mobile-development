import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const AhmetButton = ({children, onPress, mode, style}) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.buttonContainer, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default AhmetButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {backgroundColor: 'transparent'},
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
