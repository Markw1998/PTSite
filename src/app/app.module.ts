import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comp/main/main.component';
import { ContactComponent } from './comp/contact/contact.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ShopComponent } from './comp/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    NavbarComponent,
    ShopComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
