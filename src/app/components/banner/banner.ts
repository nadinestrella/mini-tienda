import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  images = ['img/anna-keibalo.jpg', 'img/banner.jpg', 'img/yunus-tug.jpg'];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  constructor() {
    console.log('images', this.images);
  }
}
