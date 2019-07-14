import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { ProductsService } from './services/products.service';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
