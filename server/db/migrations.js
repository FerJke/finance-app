const db = require("./database");

// таблиця витрат
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    amount REAL NOT NULL,
    category TEXT NOT NULL,
    date TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`,
).run();

// створимо таблицу категорій, якщо її ще немає
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY  KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
  )  
`,
).run();

const categories = [
  "Їжа",
  "Транспорт",
  "Розваги",
  "Комунальні послуги",
  "Покупки",
  "Інше",
];
const insert = db.prepare("INSERT OR IGNORE INTO categories (name) VALUES (?)");

categories.forEach((name) => insert.run(name));

console.log("Database migrated: expenses table ready");
