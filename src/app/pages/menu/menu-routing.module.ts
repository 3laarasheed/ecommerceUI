import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'pages', // NEW NAME REPRESENT THE URL OF COMPONENT
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../user/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../user/signup/signup.module').then(m => m.SignupPageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'welcome',
        loadChildren: () => import('../user/welcome/welcome.module').then( m => m.WelcomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
      },
      {
        path: 'confirm',
        loadChildren: () => import('../confirm/confirm.module').then( m => m.ConfirmPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'favourite',
        loadChildren: () => import('../favourite/favourite.module').then( m => m.FavouritePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
