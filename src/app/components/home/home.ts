import { Component } from '@angular/core';
import { HeaderContent } from '../../shared/components/header-content/header-content';

@Component({
  selector: 'app-home',
  imports: [HeaderContent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
