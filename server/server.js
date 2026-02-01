const express = require("express");
const cors = require("cors");

require("./db/migrations");

const expensesRoutes = require("./routes/expenses.js");

const app = express();
const PORT = 3000;

// middleware для JSON
app.use(cors());
app.use(express.json());

// routes
app.use("/expenses", expensesRoutes);

// тестовий маршрут
app.get("/", (req, res) => {
  res.send("Express + SQLite server is running  🚀");
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
