import { Component } from '@angular/core';
import { HeaderContent } from '../../shared/components/header-content/header-content';
import { GalleryItem } from '../../shared/components/gallery-item/gallery-item';

@Component({
  selector: 'app-portofolio',
  imports: [HeaderContent, GalleryItem],
  templateUrl: './portofolio.html',
  styleUrl: './portofolio.css',
})
export class Portofolio {
  isModelShow: boolean = false;
  currentImgSrc: string = '';
  portfolioImages = [
    '/assets/images/poert1.png',
    '/assets/images/port2.png',
    '/assets/images/port3.png',
    '/assets/images/poert1.png',
    '/assets/images/port2.png',
    '/assets/images/port3.png',
  ];
  apperModel(srcImage: string) {
    this.isModelShow = true;
    this.currentImgSrc = srcImage;
  }
  hidModel() {
    this.isModelShow = false;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
}
