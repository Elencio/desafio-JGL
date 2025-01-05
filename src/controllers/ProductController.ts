import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export class ProductController {
  constructor(private service: ProductService) {}

  addProduct(req: Request, res: Response): void {
    const { name, category, quantity, price } = req.body;
    const id = new Date().getTime().toString(); 
    this.service.addProduct({ id, name, category, quantity, price });
    res.status(201).send({ message: 'Product added successfully' });
  }

  listProducts(req: Request, res: Response): void {
    const products = this.service.listProducts();
    res.status(200).json(products);
  }

  updateProduct(req: Request, res: Response): void {
    const { id } = req.params;
    const productData = req.body;
    this.service.updateProduct(id, productData);
    res.status(200).send({ message: 'Product updated successfully' });
  }

  deleteProduct(req: Request, res: Response): void {
    const { id } = req.params;
    this.service.deleteProduct(id);
    res.status(200).send({ message: 'Product deleted successfully' });
  }

  findProduct(req: Request, res: Response): void {
    const { id } = req.params;
    const product = this.service.findProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  }
}
