import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { GameCardComponent } from './components/game-card/game-card.component';

import { GamesModule } from './games/games.module';
import { CrashModule } from './games/crash/crash.module';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroCardComponent,
    GameCardComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    CrashModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
