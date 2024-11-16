import React from 'react';

const ExpenseItem = ({ expense }) => (
  <li>
    <p>{expense.description}</p>
    <p>${expense.amount.toFixed(2)}</p>
    <p>{new Date(expense.date).toLocaleDateString()}</p>
  </li>
);

export default ExpenseItem;
