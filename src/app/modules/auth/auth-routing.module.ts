import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,

    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {returnUrl: window.location.pathname},
      },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
