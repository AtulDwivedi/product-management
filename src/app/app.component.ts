import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="">{{pageTitle}}</a>
  <ul class="nav nav-pills">
  <li><a class="nav-link" [routerLink]="['/welcome']" role="button">Home</a></li>
  <li><a class="nav-link" [routerLink]="['/products']" role="button">Product List</a></li>
  </ul>
  </nav>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
`
})
export class AppComponent {
  pageTitle = 'Product Management';
}
