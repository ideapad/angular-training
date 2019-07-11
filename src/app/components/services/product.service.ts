import { Category } from './../models/category.enum';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  public getProducts(): Product[] {
    return [
      new Product(1, 'Shoes', 'Comfy sneakers', 30, Category.Fashion, true),
      new Product(2, 'Keyboard', 'Gamers keyboard', 15, Category.Electronics, true),
      new Product(3, 'Lexus', '4 place family car', 100, Category.Motors, false),
    ];
  }
}
