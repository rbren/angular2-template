import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { appRoutes } from './app.routing';
import { AppComponent }       from './components/app';

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
