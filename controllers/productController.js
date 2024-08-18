import pool from '../config/database.js';

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
    res.json({ id: result.insertId, name, price });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = ?', [id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
