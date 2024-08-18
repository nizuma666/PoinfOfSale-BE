import pool from '../config/database.js';

export const getAllCustomers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM customers');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};

export const createCustomer = async (req, res) => {
  const { name, favoriteMenu } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO customers (name, favorite_menu) VALUES (?, ?)', [name, favoriteMenu]);
    res.json({ id: result.insertId, name, favoriteMenu });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM customers WHERE id = ?', [id]);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' });
  }
};
