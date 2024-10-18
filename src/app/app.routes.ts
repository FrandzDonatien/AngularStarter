import { Routes } from '@angular/router';
import { authGuard } from './modules/auth/services/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },


  {
    path: '',
    // canActivate: [authGuard],
    loadChildren: () => import('./layouts/layouts.module').then((m) => m.LayoutsModule),
  },
  {path: '**', redirectTo: 'error/404'},
];
