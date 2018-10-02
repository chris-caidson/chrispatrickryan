import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { firebaseConfig } from "../../app/app.module";

@Injectable()
export class AuthProvider {
  private storageKey: string = "chrisPatrickRyanLoggedIn";

  incorrectPassword: boolean = false;
  loggedIn: boolean = localStorage.getItem(this.storageKey) != null;

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  public login(password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword("admin@chrispatrickryan.com", password)
      .then(() => {
        this.loggedIn = true;
        this.incorrectPassword = false;
        localStorage.setItem(this.storageKey, "true");
      })
      .catch(() => {
        this.loggedIn = false;
        this.incorrectPassword = true;
      });
  }

  public logout() {
    firebase.auth().signOut();
    this.loggedIn = false;
    localStorage.removeItem(this.storageKey);
  }
}
