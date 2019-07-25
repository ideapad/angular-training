import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartModel } from '../../models/cart.model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() readonly cartProduct: CartModel;

  @Output() onRemoveItem = new EventEmitter<CartModel>();
  @Output() onQuantityChange = new EventEmitter<[CartModel, number]>();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.onRemoveItem.emit(this.cartProduct);
  }

  changeQuantity(newQuantityValue: number) {
    this.onQuantityChange.emit([this.cartProduct, newQuantityValue]);
  }

}
