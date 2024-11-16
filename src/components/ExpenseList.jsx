import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ))}
  </ul>
);

export default ExpenseList;
