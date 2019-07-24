import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct: CartModel;

  constructor() { }

  ngOnInit() {
  }

}
