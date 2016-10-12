import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    template: `
        <div class="container">
          <div class="pull-right">&copy; Website</div>
        </div>
      `,
})
export class FooterComponent {
  constructor() {}
}
