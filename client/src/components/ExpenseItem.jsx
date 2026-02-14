function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li key={expense.id}>
      {expense.title} — {expense.amount} грн ({expense.category})
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => deleteExpense(expense.id)}
      >
        🗑️
      </button>
    </li>
  );
}

export default ExpenseItem;