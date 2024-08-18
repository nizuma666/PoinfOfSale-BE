import pool from '../config/database.js';

const migrate = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        favorite_menu VARCHAR(255),
        level VARCHAR(255)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        product_id INT,
        quantity INT NOT NULL,
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
      )
    `);

    console.log('All tables created successfully!');
  } catch (error) {
    console.error('Failed to migrate database:', error);
  }
};

migrate();
