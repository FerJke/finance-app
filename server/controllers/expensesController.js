const db = require("../db/database");

// GET /expenses
const getExpenses = (req, res) => {
  const expenses = db
    .prepare("SELECT * FROM expenses ORDER by date DESC")
    .all();

  res.json(expenses);
};

module.exports = {
  getExpenses,
};
