import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crash',
  templateUrl: './crash.component.html',
  styleUrls: ['./crash.component.scss']
})
export class CrashComponent implements OnInit {
  multipliers: number[] = [];

  private maxMultipliers = 6;

  ngOnInit() {
    const width = window.innerWidth;
    console.log(width);
    this.maxMultipliers = width < 1000 ? 3 : 6; 
    this.generateMultipliers();
  }

  private generateMultipliers() {
    this.multipliers = Array.from({ length: this.maxMultipliers }, () => {
      const biased = Math.random() ** 3; 
      const value = biased * (10 - 1.1) + 1.1;
      return +value.toFixed(2);
    });
  }

  onMultiplierReached(multiplier: number) {
    this.multipliers.push(multiplier);
    if (this.multipliers.length > this.maxMultipliers) {
      this.multipliers.shift();
    }
  }
}
