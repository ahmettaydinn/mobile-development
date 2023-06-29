import React from 'react';
import {Pressable, Text} from 'react-native';

const IconButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={{color: 'white'}}>Star</Text>
    </Pressable>
  );
};

export default IconButton;
