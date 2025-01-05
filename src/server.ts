import express from 'express';
import { ProductController } from './controllers/ProductController';
import { ProductService } from './services/ProductService';
import { JsonProductRepository } from './repositories/JsonProductRepository';

const app = express();
app.use(express.json());

const repository = new JsonProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

app.post('/products', (req, res) => controller.addProduct(req, res));
app.get('/products', (req, res) => controller.listProducts(req, res));
app.put('/products/:id', (req, res) => controller.updateProduct(req, res));
app.delete('/products/:id', (req, res) => controller.deleteProduct(req, res));
app.get('/products/:id', (req, res) => controller.findProduct(req, res));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
