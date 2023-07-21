import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const PlaceItemComponent = ({place, onSelect}) => {
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{uri: place?.imageUri}} />
      <View>
        <Text style={styles.text}>{place?.title}</Text>
        <Text style={styles.text}>{place?.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItemComponent;

const styles = StyleSheet.create({
  container: {},
  pressed: {},
  image: {},
  text: {},
});
