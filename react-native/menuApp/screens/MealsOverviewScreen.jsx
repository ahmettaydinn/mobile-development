import React, {useLayoutEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({navigation, route}) => {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(catID) > -1,
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => {
      return cat.id == catID;
    }).title;

    navigation.setOptions({title: categoryTitle});
  }, [catID, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemHelpers = {
      imageUrl: item.imageUrl,
      title: item.title,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
      mealId: item.id,
    };
    return <MealItem mealItemHelper={mealItemHelpers} />;
  }
  return (
    <View styles={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
});
