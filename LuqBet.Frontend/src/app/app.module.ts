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
import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { GameLayoutComponent } from './components/layouts/game-layout/game-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroCardComponent,
    GameCardComponent,
    LandingComponent,
    LandingLayoutComponent,
    GameLayoutComponent,
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
