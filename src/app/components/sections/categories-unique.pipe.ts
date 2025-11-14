import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../../models/product.model';

@Pipe({
  name: 'uniqueCategories',
  standalone: true,
})
export class UniqueCategoriesPipe implements PipeTransform {
  transform(products: ProductInterface[] | undefined): string[] {
    if (!products) return [];

    const categoriesSet = new Set<string>();
    products.forEach((p) => categoriesSet.add(this.capitalize(p.category)));

    return Array.from(categoriesSet);
  }

  private capitalize(text: string): string {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
