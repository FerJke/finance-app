function ExpenseList({ expenses, deleteExpense}) {
  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>
          {expense.title} — {expense.amount} грн ({expense.category})
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => deleteExpense(expense.id)}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;