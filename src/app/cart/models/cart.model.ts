import { ProductModel } from '../../shared/models/product.model';

export class CartModel {
    public quantity: number = 0;

    constructor( public product: ProductModel) { }
}