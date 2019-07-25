
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
  private totalItemsCount: number = 0;
  private totalSum: number = 0;

  public cartProducts$ = this.channel.asObservable();

  getTotalItemsCount(): number {
    return this.totalItemsCount;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  addProduct(product: ProductModel) {
    const exstingCartProduct = 
      this.cartProducts.find(cartItem => cartItem.product.id === product.id);

    if(exstingCartProduct) {
      exstingCartProduct.quantity += 1;
    } else {
      const newCartProduct = new CartModel(product);
      newCartProduct.quantity = 1;

      this.cartProducts.push(newCartProduct);
    }

    this.totalItemsCount += 1;
    this.totalSum += product.price;

    this.channel.next(this.cartProducts);
  }

  updateItemQuantity(item: CartModel, quantity: number) {
    const itemToUpdate = this.cartProducts.find(c => c.product.id === item.product.id);
    itemToUpdate.quantity = quantity;

    this.channel.next(this.cartProducts);
  }

  removeItem(item: CartModel) {
    this.cartProducts = this.cartProducts.filter(c => c.product.id !== item.product.id);

    this.channel.next(this.cartProducts);
  }
}
