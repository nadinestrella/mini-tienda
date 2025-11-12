import { Component } from '@angular/core';
import { Search } from '../../components/search/search';
import { Banner } from '../../components/banner/banner';

@Component({
  selector: 'app-home',
  imports: [Search, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
