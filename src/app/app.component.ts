import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "HomePage";

  pages: Array<{title: string, component: any, icon: string, separatorLevel: number}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: "Home", component: "HomePage", icon: "home", separatorLevel: 1 },
      { title: "Creations", component: "CreationsPage", icon: "paint-brush", separatorLevel: 1 },
      { title: "Blog", component: "BlogPage", icon: "edit", separatorLevel: 1 },
      { title: "Best Unknown Company", component: "BestUnknownCompanyPage", icon: "question-circle", separatorLevel: 1 },
      { title: "About", component: "AboutPage", icon: "info-circle", separatorLevel: 1 },
      { title: "Admin", component: "AdminPage", icon: "cogs", separatorLevel: 1 },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pageName) {
    this.nav.setRoot(pageName);
  }
}
