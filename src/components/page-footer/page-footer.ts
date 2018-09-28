import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-footer',
  templateUrl: 'page-footer.html'
})
export class PageFooterComponent {
  year: number = new Date().getFullYear();

  constructor(public navCtrl: NavController) {}

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }
}
