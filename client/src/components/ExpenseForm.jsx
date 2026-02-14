import { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expense = {
      title,
      amount: Number(amount),
      category,
      date
    };

    const response = await fetch('http://localhost:3000/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expense)
    });

    const data = await response.json();
    onAdd(data);

    // Clear form
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
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
  );
}

export default ExpenseForm;