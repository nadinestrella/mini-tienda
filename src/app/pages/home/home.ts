import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Search } from '../../components/search/search';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Search],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
