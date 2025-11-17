import { Component } from '@angular/core';
import { Search } from '../../components/search/search';
import { Banner } from '../../components/banner/banner';
import { Sections } from '../../components/sections/sections';

@Component({
  selector: 'app-home',
  imports: [Banner, Sections],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
