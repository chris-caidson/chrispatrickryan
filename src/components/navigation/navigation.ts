import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {
  @Input() activePage: string = "Home";
  
  constructor(public navCtrl: NavController) { }

  openPage(pageName) {
    this.navCtrl.setRoot(pageName);
  }

}
