import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'navbar',
    template: require('../views/navbar.pug'),
})
export class NavbarComponent {
  constructor(private router: Router) {}
}
