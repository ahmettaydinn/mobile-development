import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpenseScreen';
import RecentExpenses from './screens/RecentExpensesScreen';
import AllExpenses from './screens/AllExpensesScreen';
import {GlobalStyles} from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  function handlePress(navigation) {
    navigation.navigate('ManageExpense');
    return;
  }

  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => {
          return (
            <IconButton
              icon={'add'}
              size={24}
              color={tintColor}
              onPress={() => handlePress(navigation)}
            />
          );
        },
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent Expenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
