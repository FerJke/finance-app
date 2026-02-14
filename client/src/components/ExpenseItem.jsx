function ExpenseItem({ expense, deleteExpense }) {
  console.log(expense);
  return (
    <li>
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