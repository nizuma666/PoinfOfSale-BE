import pool from '../config/database.js';

export const createTransaction = async (req, res) => {
  const { customerId, productId, quantity } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO transactions (customer_id, product_id, quantity) VALUES (?, ?, ?)', [customerId, productId, quantity]);
    res.json({ id: result.insertId, customerId, productId, quantity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

export const updateTransactionQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    await pool.query('UPDATE transactions SET quantity = ? WHERE id = ?', [quantity, id]);
    res.json({ message: 'Transaction updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update transaction' });
  }
};
