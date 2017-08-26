import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/menu.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {RouterModule} from '@angular/router'
import {AppRoutes} from './app.routes'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
