import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from './shared.inteface';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private isMenuEnapled = new Subject<boolean>();

  constructor() { }

  // creating method to handel side menu state (disabled or enabled)
  setMenuState(enapled) {
    this.isMenuEnapled.next(enapled);
  }

  // method for get the menu state
  getMenuState(): Subject<boolean> {
    return this.isMenuEnapled;
  }

  getClothes() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../../assets/p1.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../../assets/p2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../../assets/p3.png'
    }
    let prod4: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../../assets/p4.png'
    }
    let prod5: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../../assets/p5.png'
    }
    let prod6: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../../assets/p6.png'
    }
    products.push(prod1, prod2, prod3, prod4, prod5, prod6);

    return products;
  }
  getShoes() {
    let shoes = [];
    let shoe1: IProduct = {
      id: 1,
      name: 'Womens T-',
      price: 55,
      image: '../../../assets/sh1.png'
    }
    let shoe2: IProduct = {
      id: 2,
      name: 'Mens T-',
      price: 34,
      image: '../../../assets/sh2.png'
    }
    let shoe3: IProduct = {
      id: 1,
      name: 'Womens T-',
      price: 40,
      image: '../../../assets/sh3.png'
    }
    let shoe4: IProduct = {
      id: 1,
      name: 'Womens T-',
      price: 55,
      image: '../../../assets/sh4.png'
    }
    let shoe5: IProduct = {
      id: 1,
      name: 'Womens T-',
      price: 55,
      image: '../../../assets/sh5.png'
    }
    let shoe6: IProduct = {
      id: 1,
      name: 'Womens T-',
      price: 55,
      image: '../../../assets/sh6.png'
    }

    shoes.push(shoe1, shoe2, shoe3, shoe4, shoe5, shoe6);

    return shoes;
  }

}
