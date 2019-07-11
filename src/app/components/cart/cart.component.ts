import { CartService } from './../services/cart.service';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartProducts: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
  }

  public isCartEmpty(): boolean {
    return !this.cartProducts || !this.cartProducts.length;
  }

}
