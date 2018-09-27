import { Component } from '@angular/core';

/**
 * Generated class for the PageFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-footer',
  templateUrl: 'page-footer.html'
})
export class PageFooterComponent {

  text: string;

  constructor() {
    console.log('Hello PageFooterComponent Component');
    this.text = 'Hello World';
  }

}
