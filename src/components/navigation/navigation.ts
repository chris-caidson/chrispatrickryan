import { Component } from '@angular/core';

/**
 * Generated class for the NavigationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {

  text: string;

  constructor() {
    console.log('Hello NavigationComponent Component');
    this.text = 'Hello World';
  }

}
