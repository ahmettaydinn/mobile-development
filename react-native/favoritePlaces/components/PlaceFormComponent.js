import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Colors} from '../constants/colors';
import ImagePickerComponent from './ImagePickerComponent';
import LocationPicked from './LocationPicked';

const PlaceFormComponent = ({place, onSelect}) => {
  const [enteredTitle, setEnteredTitle] = useState();

  function titleChangeHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.container} onPress={onSelect}>
      <View>
        <Text style={styles.label}>{'title'}</Text>
        <TextInput
          style={styles.input}
          onChangeText={titleChangeHandler}
          value={enteredTitle}
        />
      </View>

      <ImagePickerComponent />
      <LocationPicked />
    </ScrollView>
  );
};

export default PlaceFormComponent;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 24},
  label: {fontWeight: 'bold', marginBottom: 4, color: Colors.primary500},
  pressed: {},
  image: {},
  text: {},
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
