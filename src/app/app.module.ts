import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthProvider } from "../providers/auth/auth";
import { PdfProvider } from '../providers/pdf/pdf';

export const firebaseConfig = {
  apiKey: "AIzaSyBiMhYll4VK-0gzCS5wmDYVGStJUUpinjc",
  authDomain: "chris-patrick-ryan.firebaseapp.com",
  databaseURL: "https://chris-patrick-ryan.firebaseio.com",
  projectId: "chris-patrick-ryan",
  storageBucket: "chris-patrick-ryan.appspot.com",
  messagingSenderId: "600854526417"
};

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    PdfProvider
    //{ provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule {}
