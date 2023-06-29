import {StyleSheet, Text, View} from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import {useContext} from 'react';
import {ExpensesContext} from '../store/expenses-context';
import {calculateDate} from '../utils/calculateDate';

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = calculateDate(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 Days'} />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default RecentExpenses;
