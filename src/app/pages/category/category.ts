import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product as ProductService } from '../../services/product';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  // signals
  products = toSignal(this.productService.getProducts());
  categorySlug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')));

  normalizeCategory(slug: string) {
    return slug
      .replace(/-/g, ' ')
      .replace(/mens/g, "men's")
      .replace(/womens/g, "women's");
  }

  filteredProducts = computed(() => {
    const items = this.products() ?? [];
    const slug = this.categorySlug() ?? '';
    if (!slug || items.length === 0) return [];

    const target = this.normalizeCategory(slug);
    return items.filter((p) => p.category.toLowerCase() === target.toLowerCase());
  });

  constructor() {
    // Esto todavía puede estar vacío al iniciar, porque los productos son asíncronos
    setTimeout(() => {
      console.log('Categoria URL:', this.categorySlug());
      console.log('Productos filtrados:', this.filteredProducts());
    }, 500);
  }
}
