import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  arr: any[] = [
    {
      id: 1,
      type: 'All',
      products: 'here it is all'
    },
    {
      id: 2,
      type: 'Phones',
      products: 'here it is phones'

    },
    {
      id: 3,
      type: 'Labtops',
      products: 'here it is labtop'
    },

  ];
  selected: number;
  constructor() {
    this.selected = this.arr[0].id;
  }

  ngOnInit() {
  }
  onClick(itemId){
    this.selected = itemId;
  }
  trackByItem(index, item): number { 
    return item.id;
  }

  onSearchChange(e){}
  goToFav(){}
  goToCart(){}
}
