import {useContext, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import AhmetButton from '../components/UI/AhmetButton';
import {ExpensesContext} from '../store/expenses-context';

function ManageExpense({route, navigation}) {
  const expenseID = route.params?.expenseID;

  const isEditing = !!expenseID;

  const expensesContext = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit expense' : 'Add expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(expenseID);
    navigation.goBack();
  };

  const cancelPressHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expensesContext.updateExpense({
        id: expenseID,
        expenseData: {
          description: 'merhaba',
          amount: 19.99,
          date: new Date('2022-5-19'),
        },
      });
    } else {
      expensesContext.addExpense({
        expenseData: {
          description: 'yuruuu',
          amount: 19.99,
          date: new Date('2022-05-19'),
        },
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <AhmetButton
          style={styles.button}
          mode={'flat'}
          onPress={cancelPressHandler}>
          Cancel
        </AhmetButton>
        <AhmetButton style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </AhmetButton>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={'trash'}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

export default ManageExpense;
