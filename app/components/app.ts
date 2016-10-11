import {Component} from '@angular/core';
declare let window: any;

@Component({
    selector: 'app',
    template: `
      <navbar></navbar>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <footer></footer>
      `,
})
export class AppComponent {
  constructor() {
    window.app = this;
  }
}
