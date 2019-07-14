import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';
import { Category } from '../../shared/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  public getProducts(): ProductModel[] {
    return [
      new ProductModel(1, 'Shoes', 'Comfy sneakers', 30, Category.Fashion, true),
      new ProductModel(2, 'Keyboard', 'Gamers keyboard', 15, Category.Electronics, true),
      new ProductModel(3, 'Lexus', '4 place family car', 100, Category.Motors, false),
    ];
  }
}
