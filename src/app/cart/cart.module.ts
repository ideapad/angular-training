import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CartItemComponent, CartListComponent],
    exports: [CartListComponent]
})
export class CartModule {}