import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {formatDate} from '../../utils/dateFormatter';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({id, description, date, amount}) => {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate('ManageExpense', {expenseID: id});
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{formatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBase, styles.amount]}>
            {amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    borderRadius: 6,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  description: {fontSize: 16, marginBottom: 4, fontWeight: 'bold'},
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {color: GlobalStyles.colors.primary500, fontWeight: 'bold'},
});
