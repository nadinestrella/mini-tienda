import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public headerOptions: { label: string; path: string; exact: boolean }[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Products', path: '/products', exact: false },
    { label: 'Contact', path: '/contact', exact: false },
  ];

  public headerIcons: string[] = [
    '<i class="fa-regular fa-heart"></i>',
    '<i class="fa-solid fa-basket-shopping"></i>',
  ];

  // <i class="fa-solid fa-heart"></i>
}
