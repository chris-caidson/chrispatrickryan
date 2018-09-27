import { Component } from '@angular/core';

@Component({
  selector: 'page-footer',
  templateUrl: 'page-footer.html'
})
export class PageFooterComponent {
  year: number = new Date().getFullYear();
  constructor() {}
}
