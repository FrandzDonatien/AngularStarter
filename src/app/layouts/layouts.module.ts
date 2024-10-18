import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { Routing } from '../pages/routing';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class LayoutsModule { }
