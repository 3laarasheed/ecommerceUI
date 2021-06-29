import { UtilService } from './../../../services/utils/util.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController,
    private util: UtilService) { }

  ngOnInit() {
  }
  login(){
    // enapling side menu in next page
    this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/menu/pages/home', {animationDirection:'forward'});
  }
}
