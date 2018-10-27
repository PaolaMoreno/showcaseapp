import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {MainContentComponent} from "app/components/main/main-content/main-content.component";
import {LandingComponent} from "app/components/main/landing/landing.component";
import {AppComponent} from "app/app.component";

const routes: Routes = [
  { path: "intro", component: AppComponent },
  { path: "work", component: MainContentComponent },
  { path: "about", component: LandingComponent },
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
