import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {

  return (
    expenses.length === 0 ? (
      <p>Витрат немає</p>
    ) : (
      <>
        <h2>Витрати</h2>
        <ul>
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </ul>
      </>
    )
  );
}

export default ExpenseList;