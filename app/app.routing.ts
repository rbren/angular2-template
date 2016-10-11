import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
];

