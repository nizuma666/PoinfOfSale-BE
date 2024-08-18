import pool from '../config/database.js';

const seedProducts = async () => {
  try {
    await pool.query(`
      INSERT INTO products (name, price) VALUES
      ('BBQ Chicken Pizza', 120000),
      ('Grilled Salmon', 150000),
      ('Cheeseburger Deluxe', 85000),
      ('Caesar Salad', 60000),
      ('Spaghetti Carbonara', 95000),
      ('Margherita Pizza', 110000),
      ('Lobster Bisque', 180000),
      ('Tacos Al Pastor', 70000),
      ('Chicken Alfredo', 105000),
      ('Ribeye Steak', 220000),
      ('Vegetarian Wrap', 65000),
      ('Buffalo Wings', 80000),
      ('Shrimp Scampi', 140000),
      ('Beef Tacos', 75000),
      ('Chicken Parmesan', 100000),
      ('Seafood Paella', 175000),
      ('Penne Arrabiata', 90000),
      ('Baked Ziti', 85000),
      ('Chocolate Lava Cake', 55000),
      ('Apple Pie', 50000)
    `);

    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Failed to seed products:', error);
  }
};

seedProducts();
