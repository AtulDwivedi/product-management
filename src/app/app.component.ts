import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <pm-header></pm-header>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  <pm-footer></pm-footer>
`
})
export class AppComponent {
  pageTitle = 'Product Management';
}
