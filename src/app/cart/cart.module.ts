import { NgModule } from "@angular/core";
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [CartItemComponent, CartListComponent],
    exports: [CartListComponent]
})
export class CartModule {}