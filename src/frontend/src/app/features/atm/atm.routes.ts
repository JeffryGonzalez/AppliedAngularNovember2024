import { Routes } from '@angular/router';
import { AtmComponent } from './atm.component';
import { WithdrawalComponent } from './pages/withdrawal.component';

export const ATM_ROUTES: Routes = [
  {
    path: '',
    component: AtmComponent,
    children: [
      {
        path: 'withdrawal',
        loadComponent: () =>
          import('./pages/withdrawal.component').then(
            (c) => c.WithdrawalComponent,
          ),
      },
    ],
  },
];
