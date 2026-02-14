import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
  fetch('http://localhost:3000/expenses')
    .then(res => res.json())
    .then(data => setExpenses(data))
    .catch(err => console.error(err));
  }, []);

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };
  
  const deleteExpense = async (id) => {
    const confirmed = window.confirm(
      'Ви впевнені, що хочете видалити витрату?'
    );

    if (!confirmed) return;

    try {
      await fetch(`http://localhost:3000/expenses/${id}`, {
        method: 'DELETE'
      });

      setExpenses(prev =>
        prev.filter(expense => expense.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Finance App</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App
