import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Product[];

  constructor() { }

  public getProducts(): Product[] {
    return this.cartProducts;
  }

  public addProduct(product: Product) {
    this.cartProducts.push(product);
  }
}
