import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() public text: string = '';
  @Input() public disabled: boolean = false;
  @Input() public color: 'primary' | 'secondary' = 'primary';
}
