const db = require("../db/database");

const getCategories = (req, res) => {
  const categories = db.prepare("SELECT * FROM categories").all();

  res.json(categories);
};

module.exports = {
  getCategories,
};
