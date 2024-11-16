import React, { useState } from 'react';

const BudgetForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income'); // 'income' o 'expense'

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount: parseFloat(amount), description, type });
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Monto" 
        required 
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descripción" 
        required 
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Ingreso</option>
        <option value="expense">Gasto</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default BudgetForm;
