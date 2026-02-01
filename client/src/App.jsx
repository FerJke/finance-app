import { useState, useEffect } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const [expenses, setExpenses] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const expense = {
      title,
      amount: Number(amount),
      category,
      date
    };

    try {
      const response = await fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
      });

      const data = await response.json();
      console.log('Збережено:', data);
      setExpenses(prev => [data, ...prev]);

    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  useEffect(() => {
  fetch('http://localhost:3000/expenses')
    .then(res => res.json())
    .then(data => setExpenses(data))
    .catch(err => console.error(err));
}, []);

  return (
    <div className="container">
      <h1>Finance App</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Назва витрати:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Сума:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Категорія:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Дата:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Додати</button>
      </form>

      <h2>Витрати</h2>

      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.title} — {expense.amount} грн ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
