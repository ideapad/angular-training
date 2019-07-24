import { Observable } from 'rxjs';
import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartModel } from './models/cart.model';

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

  public isCartEmpty(cartProducts: CartModel[]): boolean {
    return !cartProducts || !cartProducts.length;
  }

}
