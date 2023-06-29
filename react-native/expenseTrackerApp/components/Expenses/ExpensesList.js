import {FlatList, StyleSheet} from 'react-native';
import ExpenseItem from './ExpenseItem';

function ExpensesList({expenses}) {
  function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {},
// });

export default ExpensesList;
