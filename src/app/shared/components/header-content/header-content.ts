import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'header-content',
  imports: [],
  templateUrl: './header-content.html',
  styleUrl: './header-content.css',
})
export class HeaderContent {
  @Input({ required: true }) text!: string;
  @Input() styleColor: string = 'white';
}
