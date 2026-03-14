const db = require("../config/db");

exports.getUsers = async () => {
  const result = await db.query("SELECT * FROM users ORDER BY id ASC");
  return result.rows;
};

exports.getUserById = async (id) => {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

exports.createUser = async (name, email, password) => {
  const result = await db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password],
  );
  return result.rows[0];
};

exports.updateUser = async (id, name, email, password) => {
  const result = await db.query(
    "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
    [name, email, password, id],
  );
  return result.rows[0];
};

exports.deleteUser = async (id) => {
  const result = await db.query("DELETE FROM users WHERE id = $1", [id]);
  return result.rowCount;
};
