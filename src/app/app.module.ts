import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './content/home/home.component';
import {AboutUsComponent} from './content/about-us/about-us.component';
import { MyCartComponent } from './content/my-cart/my-cart.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
