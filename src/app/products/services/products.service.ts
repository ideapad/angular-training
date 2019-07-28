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
      new ProductModel(4, 'Lexus', '4 place family car', 100, Category.Motors, true),
      new ProductModel(5, 'Power bank', '10Ah of capacity', 25, Category.Electronics, true),
      new ProductModel(6, 'Hoverboard', 'Skate to the future', 100, Category.Sports, false),
    ];
  }
}
