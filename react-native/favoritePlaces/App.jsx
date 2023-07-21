import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/AllPlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';
import IconButton from './components/UI/IconButton';
import {Colors} from './constants/colors';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlacesScreen}
          options={({navigation}) => ({
            title: 'Your Favorite Places',
            headerRight: ({tintColor}) => (
              <IconButton
                name="md-add"
                size={24}
                color={tintColor}
                onPress={() => navigation.navigate('AddPlace')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlaceScreen}
          options={{title: 'Add Place'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
