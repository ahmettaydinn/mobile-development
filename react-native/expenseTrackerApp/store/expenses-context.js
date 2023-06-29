const {createContext, useReducer} = require('react');

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'a pair of shoes',
    amount: 59.99,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e2',
    description: 'a pair of socks',
    amount: 9.45,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e3',
    description: 'a jacket',
    amount: 12.99,
    date: new Date('2022-12-19'),
  },
  {
    id: 'e4',
    description: 'some bananas',
    amount: 22,
    date: new Date('2020-12-19'),
  },
  {
    id: 'e5',
    description: 'books',
    amount: 100,
    date: new Date('2019-12-19'),
  },
  {
    id: 'e6',
    description: 'sofa',
    amount: 10.32,
    date: new Date('2019-11-19'),
  },
  {
    id: 'e7',
    description: 'human',
    amount: 1,
    date: new Date('2019-10-19'),
  },
  {
    id: 'e8',
    description: 'glasses',
    amount: 134.4,
    date: new Date('2019-9-19'),
  },
  {
    id: 'e9',
    description: 'napkin',
    amount: 10.32,
    date: new Date('2019-5-19'),
  },
  {
    id: 'e10',
    description: 'forks',
    amount: 44,
    date: new Date('2019-1-24'),
  },
  {
    id: 'e11',
    description: 'anan',
    amount: 51,
    date: new Date('2023-6-27'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({expenseData}) => {},
  deleteExpense: ({id}) => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(expense => {
        return expense.id === action.payload.id;
      });

      const updatableExpense = state[updatableExpenseIndex];

      const updatedItem = {...updatableExpense, ...action.payload.expenseData};

      const updatedExpenses = [...state];

      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);

    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense({expenseData}) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense({id, expenseData}) {
    dispatch({type: 'UPDATE', payload: {id: id, expenseData: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
