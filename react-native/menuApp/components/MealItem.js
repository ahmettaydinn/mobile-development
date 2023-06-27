import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MealDetail from './mealDetail';

const MealItem = ({mealItemHelper}) => {
  const {title, complexity, duration, affordability, imageUrl, mealId} =
    mealItemHelper;

  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('detail', {mealId: mealId});
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={handleNavigate}
        android_ripple={'#ccc'}
        style={({pressed}) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,

    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {fontWeight: 'bold', textAlign: 'center', fontSize: 18, margin: 8},

  buttonPressed: {opacity: 0.5},
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {marginHorizontal: 4, fontSize: 12},
});
