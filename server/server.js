const express = require("express");

const app = express();
const PORT = 3000;

// middleware для JSON (знадобиться дуже скоро)
app.use(express.json());

// тестовий маршрут
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
