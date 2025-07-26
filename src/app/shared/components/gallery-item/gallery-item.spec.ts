import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItem } from './gallery-item';

describe('GalleryItem', () => {
  let component: GalleryItem;
  let fixture: ComponentFixture<GalleryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
