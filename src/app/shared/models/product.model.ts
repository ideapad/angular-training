import { Category } from './category.enum';

export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean
  ) {
    this.id = id || null;
    this.isAvailable = isAvailable || false;
    this.category = category || Category.NoCategory;
  }
}
