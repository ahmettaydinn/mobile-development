import * as React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#53321f'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#ac7250'},
        }}>
        <Stack.Screen
          name="categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        />
        <Stack.Screen name="detail" component={MealDetailScreen} />
        <Stack.Screen name="overview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return <Text>sdfsd</Text>;
};

export default App;
