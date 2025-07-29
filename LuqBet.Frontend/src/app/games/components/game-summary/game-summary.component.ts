import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrl: './game-summary.component.scss'
})
export class GameSummaryComponent {
  @Input({ required: true }) gameName: string = 'Game';

}
