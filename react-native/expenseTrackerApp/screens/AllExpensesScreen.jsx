import {StyleSheet, Text, View} from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import {useContext} from 'react';
import {ExpensesContext} from '../store/expenses-context';

function AllExpenses() {
  const expensesContext = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod={'Total'}
    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default AllExpenses;
