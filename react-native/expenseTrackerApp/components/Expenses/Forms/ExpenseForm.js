import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AhmetInput from './AhmetInput';
import {GlobalStyles} from '../../../constants/styles';
import AhmetButton from '../../UI/AhmetButton';
import {ExpensesContext} from '../../../store/expenses-context';

const ExpenseForm = ({navigation, isEditing, defaultValues, expenseID}) => {
  const expensesContext = useContext(ExpensesContext);

  const [amount, setAmount] = useState(
    defaultValues ? defaultValues.amount.toString() : '',
  );
  const [date, setDate] = useState(
    defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
  );
  const [description, setDescription] = useState(
    defaultValues ? defaultValues.description : '',
  );

  function amountChangeHandler(amountValue) {
    setAmount(amountValue);
  }
  function dateChangeHandler(dateValue) {
    setDate(dateValue);
  }
  function descriptionChangeHandler(descValue) {
    setDescription(descValue);
  }

  const cancelPressHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    const expenseData = {
      amount: +amount,
      date: new Date(date),
      description: description,
    };

    if (isEditing) {
      expensesContext.updateExpense({id: expenseID, expenseData});
    } else {
      expensesContext.addExpense({
        expenseData: expenseData,
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.dateAndAmountContainer}>
        <AhmetInput
          style={styles.rowInput}
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
            value: amount,
          }}
        />
        <AhmetInput
          style={styles.rowInput}
          label={'Date'}
          textInputConfig={{
            maxLength: 10,
            onChangeText: dateChangeHandler,
            placeholder: 'YYYY-MM-DD',
            value: date,
          }}
        />
      </View>

      <AhmetInput
        label={'Description'}
        textInputConfig={{
          multiline: true,
          onChangeText: descriptionChangeHandler,
          value: description,
        }}
      />

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
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 60,
  },
  dateAndAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {flex: 1},
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
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
});
