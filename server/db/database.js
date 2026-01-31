const Database = require("better-sqlite3");
const path = require("path");

// файл бази даних
const dbPath = path.join(__dirname, "..", "finance.db");

// підключення
const db = new Database(dbPath);

// увімкнемо зовнішні ключі (good practice)
db.pragma("foreign_keys = ON");

module.exports = db;
