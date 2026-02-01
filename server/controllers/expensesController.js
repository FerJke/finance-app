const db = require("../db/database");

// GET /expenses
const getExpenses = (req, res) => {
  const expenses = db
    .prepare("SELECT * FROM expenses ORDER by date DESC")
    .all();

  res.json(expenses);
};

// POST /expenses
const createExpense = (req, res) => {
  const { title, amount, category, date } = req.body;

  // базова валідація
  if (!title || !amount || !category || !date) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const result = db
    .prepare(
      `
    INSERT INTO expenses (title, amount, category, date)
    VALUES (?, ?, ?, ?)
  `,
    )
    .run(title, amount, category, date);

  res.status(201).json({
    id: result.lastInsertRowid,
    title,
    amount,
    category,
    date,
  });
};

// DELETE /expenses/:id
const deleteExpense = (req, res) => {
  const { id } = req.params;

  const result = db.prepare("DELETE FROM expenses WHERE id = ?").run(id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.json({ success: true });
};

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
};
