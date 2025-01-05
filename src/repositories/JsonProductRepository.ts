import { Product } from '../entities/Product';
import { ProductRepository } from './ProductRepository';
import * as fs from 'fs';

export class JsonProductRepository implements ProductRepository {
  private dataFile = 'products.json';
  private products: Product[] = [];

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    if (fs.existsSync(this.dataFile)) {
      const data = fs.readFileSync(this.dataFile, 'utf-8');
      this.products = JSON.parse(data) as Product[];
    }
  }

  private saveData(): void {
    fs.writeFileSync(this.dataFile, JSON.stringify(this.products));
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.saveData();
  }

  listProducts(): Product[] {
    return this.products;
  }

  updateProduct(id: string, productData: Partial<Product>): void {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      Object.assign(product, productData);
      this.saveData();
    }
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter((p) => p.id !== id);
    this.saveData();
  }

  findProductById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
