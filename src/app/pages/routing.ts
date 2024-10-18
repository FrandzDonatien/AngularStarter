import { Routes } from "@angular/router";

const Routing: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
]

export {Routing};
