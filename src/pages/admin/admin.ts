import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  public adminPassword: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  public login() {
    this.auth.login(this.adminPassword);
  }

  public logout() {
    this.auth.logout();
  }
}
