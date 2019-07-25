import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public cartProducts$: Observable<CartModel[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
  }

  get totalItemsCount() {
    return this.cartService.getTotalItemsCount();
  }

  get totalSum() {
    return this.cartService.getTotalSum();
  }

  isCartEmpty(cartProducts: CartModel[]): boolean {
    return !cartProducts || !cartProducts.length;
  }

  removeCartItem(item: CartModel) {
    this.cartService.removeItem(item);
  }

  changeQuantity(newValue: [CartModel, number]) {
    const newQuantity = newValue[0];
    const item = newValue[1];

    this.cartService.updateItemQuantity(newQuantity, item)
  }

}
