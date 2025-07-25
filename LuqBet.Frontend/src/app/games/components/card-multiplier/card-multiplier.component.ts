import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-multiplier',
  templateUrl: './card-multiplier.component.html',
  styleUrl: './card-multiplier.component.scss'
})
export class CardMultiplierComponent {
  @Input({ required: true }) multiplierNumber!: number;
}
