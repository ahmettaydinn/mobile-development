import {Pressable, StyleSheet, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 3,
    marginHorizontal: 8,
    marginVertical: 2,
    zIndex: 2,
  },
  pressed: {opacity: 0.75},
});

export default IconButton;
