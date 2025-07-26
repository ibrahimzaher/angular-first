import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gallery-item',
  imports: [],
  templateUrl: './gallery-item.html',
  styleUrl: './gallery-item.css',
})
export class GalleryItem {
  @Input() imgSrc: string = '';
}
