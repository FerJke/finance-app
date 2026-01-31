const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// middleware для JSON (знадобиться дуже скоро)
app.use(cors());
app.use(express.json());

// тестовий маршрут
app.get("/", (req, res) => {
  res.send("Express server with CORS is running 🚀");
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
