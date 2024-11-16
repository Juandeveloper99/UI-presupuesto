import React from 'react';
import BudgetForm from '../components/BudgetForm';

const AddExpense = ({ onAddExpense }) => (
  <div>
    <h1>Añadir Gasto</h1>
    <BudgetForm onSubmit={onAddExpense} />
  </div>
);

export default AddExpense;
