import { Component, computed, inject } from '@angular/core';
import { Product as ProductService } from '../../services/product';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { UniqueCategoriesPipe } from './categories-unique.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [CommonModule, UniqueCategoriesPipe],
  templateUrl: './sections.html',
  styleUrl: './sections.css',
})
export class Sections {
  private productService = inject(ProductService);
  private router = inject(Router);

  public product = toSignal(this.productService.getProducts());

  public uniqueCategories = computed(() => {
    const prods = this.product();
    if (!prods) return [];

    const categoriesSet = new Set<string>();
    prods.forEach((p) => categoriesSet.add(p.category));

    return Array.from(categoriesSet);
  });

  constructor() {
    console.log('valor inciial', this.product());
  }

  goToCategory(category: string) {
    const slug = category.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
    this.router.navigate(['/category', slug]);
  }
}
