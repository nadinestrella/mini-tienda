import { Component, computed, inject, signal } from '@angular/core';
import { Product as ProductService } from '../../services/product';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from '../../components/product-card/product-card';
import { Search } from '../../components/search/search';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard, CommonModule, Search],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // Inyectamos el servicio de productos
  // inject reemplaza la necesidad de un constructor para la inyección de dependencias
  private productService = inject(ProductService);

  // Usamos toSignal para convertir el Observable<Product[]> en unSignal<Product[] | undefined>
  // Angular gestiona la suscripción y desuscripción automáticamente.
  public products = toSignal(this.productService.getProducts());

  public searchTerm = signal('');

  //Search
  filteredProducts = computed(() => {
    const list = this.products();
    const term = this.searchTerm().toLowerCase();

    if (!list) {
      return [];
    }
    if (!term) return list;

    return list.filter(
      (p) => p.title.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
    );
  });

  public setSearch(value: string) {
    this.searchTerm.set(value);
  }

  //en el constructor se puede definir la inyección de dependencias de servicios
  constructor() {
    // Opcional: Puedes ver el valor inicial (undefined) y luego el array
    console.log('Valor inicial del signal products:', this.products());
  }
}
