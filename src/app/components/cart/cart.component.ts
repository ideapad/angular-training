import { Observable } from 'rxjs';
import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartModel } from './models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartProducts$: Observable<CartModel[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProducts$ = this.cartService.cartProducts$;
  }

  // не используется?
  public isCartEmpty(cartProducts: CartModel[]): boolean {
    return !cartProducts || !cartProducts.length;
  }
}
