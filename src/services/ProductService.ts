import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class ProductService {
  constructor(private repository: ProductRepository) {}

  addProduct(product: Product): void {
    this.repository.addProduct(product);
  }

  listProducts(): Product[] {
    return this.repository.listProducts();
  }

  updateProduct(id: string, productData: Partial<Product>): void {
    this.repository.updateProduct(id, productData);
  }

  deleteProduct(id: string): void {
    this.repository.deleteProduct(id);
  }

  findProductById(id: string): Product | undefined {
    return this.repository.findProductById(id);
  }
}
