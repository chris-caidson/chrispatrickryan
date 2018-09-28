import { Injectable } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Injectable()
export class PdfProvider {

  constructor(private browser: InAppBrowser) { }

  openPdf(path) {
    this.browser.create(path, "_system", {
      location: "yes",
      hidden: "no",
      clearcache: "yes",
      clearsessioncache: "yes",
      zoom: "yes",
      hardwareback: "yes",
      mediaPlaybackRequiresUserAction: "no",
      shouldPauseOnSuspend: "no",
      closebuttoncaption: "Close",
      disallowoverscroll: "no",
      toolbar: "yes",
      enableViewportScale: "yes",
      allowInlineMediaPlayback: "no",
      presentationstyle: "pagesheet",
      fullscreen: "yes"
    });
  }
}
