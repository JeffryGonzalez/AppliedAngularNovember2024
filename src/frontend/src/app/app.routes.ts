import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';

// routes are "modes" our application can be in.
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'gifts',
    loadChildren: () =>
      import('./features/gifts/gifts.routes').then((r) => r.GIFT_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
