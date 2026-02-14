import { useState, useEffect } from 'react';

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
  fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(data => setCategories(data));
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expense = {
      title,
      amount: Number(amount),
      category_id: Number(categoryId),
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
    setDate('');
    setCategoryId('');
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
          <select
            value={categoryId}
            onChange={e => setCategoryId(e.target.value)}
          >
            <option value="">Оберіть категорію</option>

            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
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