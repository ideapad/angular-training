import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers } from '@angular/core';
import { CartModel } from '../../models/cart.model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, OnChanges, DoCheck {
  @Input() readonly cartProduct: CartModel;

  @Output() onRemoveItem = new EventEmitter<CartModel>();
  @Output() onQuantityChange = new EventEmitter<[CartModel, number]>();

  private differ : any;

  constructor(private differs: KeyValueDiffers) { }

  ngOnInit() {
    this.differ = this.differs.find(this.cartProduct).create();
  }

  ngOnChanges(simplecahnges: SimpleChanges) {
    console.log(simplecahnges);
  }

  ngDoCheck() {
    const cartProductChanges = this.differ.diff(this.cartProduct);

    console.log(cartProductChanges);
  }

  removeItem() {
    this.onRemoveItem.emit(this.cartProduct);
  }

  changeQuantity(newQuantityValue: number) {
    this.onQuantityChange.emit([this.cartProduct, newQuantityValue]);
  }

}
