import {useContext, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import AhmetButton from '../components/UI/AhmetButton';
import {ExpensesContext} from '../store/expenses-context';
import ExpenseForm from '../components/Expenses/Forms/ExpenseForm';

function ManageExpense({route, navigation}) {
  const expenseID = route.params?.expenseID;

  const isEditing = !!expenseID;

  const expensesContext = useContext(ExpensesContext);

  const selectedExpense = expensesContext.expenses.find(
    expense => expense.id === expenseID,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit expense' : 'Add expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(expenseID);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        navigation={navigation}
        isEditing={isEditing}
        defaultValues={selectedExpense}
        expenseID={expenseID}
      />

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

  deleteContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

export default ManageExpense;
