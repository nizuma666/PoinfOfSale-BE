import express from 'express';
import { getAllCustomers, createCustomer, deleteCustomer } from '../controllers/customerController.js';
import { getAllProducts, createProduct, deleteProduct } from '../controllers/productController.js';
import { createTransaction, updateTransactionQuantity } from '../controllers/transactionController.js';

const router = express.Router();

router.get('/customers', getAllCustomers);
router.post('/customers', createCustomer);
router.delete('/customers/:id', deleteCustomer);

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);

router.post('/transactions', createTransaction);
router.put('/transactions/:id', updateTransactionQuantity);

export default router;
