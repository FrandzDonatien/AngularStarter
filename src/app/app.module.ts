import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { provideRouter, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from "./app.routes";

@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    NgModule,
    RouterOutlet
  ],
  providers:[
    provideRouter(routes)
  ],
  bootstrap:[AppComponent]
})

export class AppModule {
}
