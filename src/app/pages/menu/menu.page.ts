import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UtilService } from '../../services/utils/util.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  isMenuEnapled: boolean = true;

  selected: number;

  public pages = [
    {
      id: 0,
      name: 'Home',
      url: '/menu/pages/home'
    },
    {
      id: 1,
      name: 'Welcom',
      url: '/menu/pages/welcome'
    },
    {
      id: 2,
      name: 'Login',
      url: '/menu/pages/login'
    },
    {
      id: 3,
      name: 'Signup',
      url: '/menu/pages/signup' // path from start for url and navigation
    },
    {
      id:4,
      name: 'Category',
      url: '/menu/pages/category'
    },
    {
      id:5,
      name: 'Cart',
      url: '/menu/pages/cart'
    },
    {
      id:6,
      name: 'Category',
      url: '/menu/pages/category'
    },
    {
      id:7,
      name: 'Favourite',
      url: '/menu/pages/favourite'
    },
    {
      id:8,
      name: 'Profile',
      url: '/menu/pages/profile'
    },

  ]
  constructor(private util: UtilService,
    private menu: MenuController) { }

  ngOnInit() {
    this.util.getMenuState().subscribe( menuState => {
      this.isMenuEnapled = menuState;
    });
    this.selected = this.pages[0].id;
  }
  onNav(pageId) {
    this.selected = pageId;
  }
  trackByList(index, category): number {
    return category.id;
  }

  close(){
    this.menu.toggle();
  }
}
