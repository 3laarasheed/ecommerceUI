import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  arr: number[] = [1,2 ,3 ]
  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
