import { Product } from '../entities/Product';

export interface ProductRepository {
  addProduct(product: Product): void;
  listProducts(): Product[];
  updateProduct(id: string, productData: Partial<Product>): void;
  deleteProduct(id: string): void;
  findProductById(id: string): Product | undefined;
}
