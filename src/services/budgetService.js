// Simulación de API
export const fetchExpenses = async () => {
    return [
      { id: 1, description: 'Compra', amount: 50, date: new Date(), type: 'expense' },
    ];
  };
  
  export const saveExpense = async (expense) => {
    console.log('Gasto guardado:', expense);
  };
  