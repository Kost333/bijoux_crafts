import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./content/home/home.component";
import {AboutUsComponent} from "./content/about-us/about-us.component";
import {MyCartComponent} from "./content/my-cart/my-cart.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'cart', component: MyCartComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
