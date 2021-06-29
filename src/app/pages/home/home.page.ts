import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { UtilService } from '../../services/utils/util.service';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: any[];
  shoes: any[];
  myCats = [
    {
      name: "ELECTRONICS",
      picUrl: '../../../assets/play.png'
    },
    {
      name: "CLOTHES",
      picUrl: '../../../assets/play.png'
    },
    {
      name: "MAKEUP",
      picUrl: '../../../assets/play.png'
    },
    {
      name: "KIDS GAMES",
      picUrl: '../../../assets/play.png'
    },
    {
      name: "ACCESSORIES",
      picUrl: '../../../assets/play.png'
    },
    {
      name: "T-SHIRTS",
      picUrl: '../../../assets/play.png'
    },
    {
      name: "SHOES",
      picUrl: '../../../assets/play.png'
    },
  ];

  @ViewChild('mySlider') slider: IonSlides;

  slideOpts = {
    speed: 2000,
    grabCursor: true
  }
  constructor(private modalCtrl: ModalController ,private data: UtilService) { }

  ngOnInit() {
    this.products = this.data.getClothes();
    this.shoes = this.data.getShoes()
  }
  async goToCart() {
    let modal = await this.modalCtrl.create({
      component : CartPage
    });
    
    await modal.present();
  }
  goToFav() { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  trackByProduct(product) {
    return product.id;
  }
}
