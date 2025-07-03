import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomButtonComponent,
    HeroCardComponent,
    GameCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
