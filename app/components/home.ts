import {Http} from '@angular/http';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {GitHubService} from '../services/github';
declare let $: any;

var TITLE_HTML= `
  <div class="main-title-text">
    <h1>GitWay</h1>
    <p class="intro">
      Share and sell access to private GitHub repositories
    </p>
  </div>
`

@Component({
    selector: 'home',
    template: `
        <div class="home-page">
          <div class="row">
            <div class="hidden-xs col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-7 col-lg-offset-2">
              <div class="main-title main-title-big">
                <img src="/img/stoplight.svg" class="logo">
                ${TITLE_HTML}
              </div>
              <div class="intro-buttons">
                <a class="btn btn-lg btn-primary pull-left" routerLink="/shop">Buy Code</a>
                <a class="btn btn-lg btn-primary pull-right" routerLink="/sell">Sell Code</a>
                <span class="clearfix"></span>
              </div>
            </div>
            <div class="visible-xs col-xs-12 text-center">
              <div class="main-title main-title-xs">
                ${TITLE_HTML}
                <img src="/img/stoplight.svg" class="logo">
                <div class="intro-buttons text-center">
                  <a class="btn btn-primary" routerLink="/shop">Start Shopping</a>
                  <a class="btn btn-primary" routerLink="/sell">Start Selling</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
})
export class HomeComponent {
  constructor(private router: Router, private github: GitHubService) {
    this.github.onAuthFinished = () => {
      this.router.navigate(['/shop']);
    }
  }
}
