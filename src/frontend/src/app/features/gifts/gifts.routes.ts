import { Routes } from '@angular/router';
import { GiftsComponent } from './gifts.component';
import { PeopleComponent } from './pages/people.component';

export const GIFT_ROUTES: Routes = [
  {
    path: '',
    component: GiftsComponent,
    children: [
      {
        path: 'people',
        component: PeopleComponent,
      },
    ],
  },
];
