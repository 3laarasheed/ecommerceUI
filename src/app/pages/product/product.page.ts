import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  selectedColor: number;
  selectedSize: number;
  activeVariation: string;
  constructor() { }

  ngOnInit() {
    this.activeVariation = 'size'
  }

  goToCart() { }
  goToFav() { }
  segmentChanged(ev) {
    this.activeVariation = ev.detail.value;
  }
  changeSize(size) {
    this.selectedSize = size
  }
  changeColor(color) {
    this.selectedColor = color
  }
}
