import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Colors} from '../constants/colors';

const ImagePickerComponent = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const takeImageHandler = async () => {
    try {
      const image = await launchCamera({
        noData: true,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
        mediaType: 'photo',
        presentationStyle: 'fullScreen',
      });
      setPickedImage(image);
    } catch (error) {
      setPickedImage(null);
    }
  };

  let imagePreview = <Text style={{color: 'white'}}>No image taken yet.</Text>;

  if (pickedImage && !pickedImage?.errorCode) {
    imagePreview = (
      <Image style={styles.image} source={{uri: pickedImage?.assets[0]?.uri}} />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take fotograf" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 24},
  label: {fontWeight: 'bold', marginBottom: 4, color: Colors.primary500},
  pressed: {},
  image: {width: '100%', height: '100%'},
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
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
