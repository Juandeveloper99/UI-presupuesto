import React, { createContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now(), date: new Date() }]);
    if (expense.type === 'income') {
      setTotalIncome(totalIncome + expense.amount);
    }
  };

  return (
    <BudgetContext.Provider value={{ expenses, totalIncome, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
