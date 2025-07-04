import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrashGameComponent } from './components/crash-game/crash-game.component';
import { CrashRoutingModule } from './crash-routing.module';
import { CrashComponent } from './components/crash/crash.component';
import { GamesModule } from "../games.module";



@NgModule({
  declarations: [
    CrashGameComponent,
    CrashComponent
  ],
  exports: [
    CrashGameComponent,
    CrashComponent
  ],
  imports: [CommonModule, CrashRoutingModule, GamesModule]
})
export class CrashModule { }
