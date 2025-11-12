import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  images = [
    '/assets/images/anna-keibalo.jpg',
    'assets/images/banner.jpg',
    'assets/images/yunus-tug.jpg',
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
