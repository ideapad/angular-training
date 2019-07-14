import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() buy: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    this.buy.emit(this.product);
    console.log('Product has been purchased');
  }
}
