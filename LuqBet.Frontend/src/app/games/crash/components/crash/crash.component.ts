import { Component } from '@angular/core';

@Component({
  selector: 'app-crash',
  templateUrl: './crash.component.html',
  styleUrl: './crash.component.scss'
})
export class CrashComponent {
  multipliers = Array.from({ length: 6 }, () => {
    const biased = Math.random() ** 3; 
    const value = biased * (20 - 1.1) + 1.1;
    return +value.toFixed(2);
  });


  onMultiplierReached(multiplier: number) {
    this.multipliers.push(multiplier);
    if (this.multipliers.length > 6) {
      this.multipliers.shift();
    }
  }
}
