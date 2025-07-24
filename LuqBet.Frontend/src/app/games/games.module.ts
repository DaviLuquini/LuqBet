import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { GameSummaryComponent } from './components/game-summary/game-summary.component';
import { PlaceBetComponent } from './components/place-bet/place-bet.component';
import { CardMultiplierComponent } from './components/card-multiplier/card-multiplier.component';


@NgModule({
  declarations: [
    GameContainerComponent,
    PlaceBetComponent,
    GameSummaryComponent,
    CardMultiplierComponent
  ],
  exports: [
    GameContainerComponent,
    PlaceBetComponent,
    GameSummaryComponent,
    CardMultiplierComponent
  ],
  imports: [CommonModule]
})
export class GamesModule { }
