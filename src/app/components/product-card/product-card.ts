import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductInterface } from '../../models/product.model';
import { Button } from '../button/button';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  // Usamos input.required para asegurar que siempre se pase un producto

  product = input.required<ProductInterface>();

  addToCart = output<ProductInterface>();

  add(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());
  }
}
