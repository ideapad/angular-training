
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../../shared/models/product.model';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private channel = new Subject<CartModel[]>();
  private cartProducts: CartModel[] = [];

  public cartProducts$ = this.channel.asObservable();

  public addProduct(product: ProductModel) {
    const exstingCartProduct = 
      this.cartProducts.find(cartItem => cartItem.product.id === product.id);

    if(exstingCartProduct) {
      exstingCartProduct.quantity += 1;
    } else {
      const newCartProduct = new CartModel(product);
      this.cartProducts.push(newCartProduct);
    }

    this.channel.next(this.cartProducts);
  }
}
