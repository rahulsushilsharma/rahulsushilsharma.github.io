import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootorComponent } from './footor/footor.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
// import { router } from './about/about.component';'

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    FootorComponent,
    AboutComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
