import React from 'react';
import Summary from '../components/Summary';
import ExpenseList from '../components/ExpenseList';

const Dashboard = ({ totalIncome, totalExpense, expenses }) => (
  <div>
    <h1>Dashboard</h1>
    <Summary totalIncome={totalIncome} totalExpense={totalExpense} />
    <ExpenseList expenses={expenses} />
  </div>
);

export default Dashboard;
