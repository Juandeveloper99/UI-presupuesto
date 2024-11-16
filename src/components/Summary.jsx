import React from 'react';

const Summary = ({ totalIncome, totalExpense }) => (
  <div>
    <h2>Resumen</h2>
    <p>Total Ingresos: ${totalIncome.toFixed(2)}</p>
    <p>Total Gastos: ${totalExpense.toFixed(2)}</p>
    <p>Balance: ${(totalIncome - totalExpense).toFixed(2)}</p>
  </div>
);

export default Summary;
