import pool from '../config/database.js';

const seedCustomers = async () => {
  try {
    await pool.query(`
      INSERT INTO customers (name, favorite_menu, level) VALUES
  ('Odis Rhinehart', 'Chicken & Ribs Combo', 'Warga'),
  ('Kris Roher', 'Surf & Turf Gift Basket', 'Warga'),
  ('Lennie Coffin', 'BBQ Pulled Pork', 'Warga'),
  ('Gerry Odom', 'Lobster Tail', 'Juragan'),
  ('Faith Tabor', 'Steak & Shrimp', 'Juragan'),
  ('Jon Snow', 'Roasted Duck', 'Sultan'),
  ('Arya Stark', 'Grilled Salmon', 'Warga'),
  ('Daenerys Targaryen', 'Seafood Platter', 'Sultan'),
  ('Tyrion Lannister', 'Pasta Carbonara', 'Konglomerat'),
  ('Sansa Stark', 'Caesar Salad', 'Juragan'),
  ('Bran Stark', 'Vegetarian Pizza', 'Warga'),
  ('Robb Stark', 'Cheeseburger Deluxe', 'Sultan'),
  ('Cersei Lannister', 'Beef Wellington', 'Konglomerat'),
  ('Jaime Lannister', 'Filet Mignon', 'Konglomerat'),
  ('Theon Greyjoy', 'Fish and Chips', 'Warga'),
  ('Samwell Tarly', 'Fried Chicken', 'Warga'),
  ('Brienne of Tarth', 'Grilled Chicken', 'Juragan'),
  ('Jorah Mormont', 'Lamb Chops', 'Sultan'),
  ('Sandor Clegane', 'BBQ Ribs', 'Konglomerat'),
  ('Gregor Clegane', 'Steak and Eggs', 'Konglomerat');

    `);
    console.log('Customer data seeded successfully!');
  } catch (error) {
    console.error('Error seeding customer data:', error);
  }
};

seedCustomers();
