import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetail } from './pages/product-detail/product-detail';
import { NotFound } from './pages/not-found/not-found';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio - Mini Tienda' },
  { path: 'products', component: ProductList, title: 'Productos - Mini Tienda' },
  { path: 'product/:id', component: ProductDetail, title: 'Detalle Producto -  Mini Tienda' },
  { path: 'contact', component: Contact, title: 'Contact -  Mini Tienda' },
  { path: '**', component: NotFound, title: '404 - No Encontrado' },
];
