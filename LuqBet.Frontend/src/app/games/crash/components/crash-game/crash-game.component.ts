import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crash-game',
  templateUrl: './crash-game.component.html',
  styleUrl: './crash-game.component.scss'
})
export class CrashGameComponent {
  multiplier: number = 1.0;
  running: boolean = false;
  min: number = 1.1;
  max: number = 10.0;
  random: number = (Math.random() * (this.max - this.min) + this.min) ** 3.5;
  crashPoint: number = parseFloat(this.random.toFixed(2));
  @Output() multiplierReached = new EventEmitter<number>();

  render = (multiplier: number) => {
    this.multiplier = parseFloat(multiplier.toFixed(2));
  };

  async startCrashLoop() {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    const start = performance.now();

    const update = (time: number) => {
      if (!this.running || this.multiplier >= this.crashPoint) {
        this.running = false;
        this.multiplierReached.emit(this.multiplier);
        console.log(this.multiplier)
        return;
      }

      const elapsed = (time - start) / 500;
      this.multiplier = +(1.05 ** elapsed).toFixed(2);
      this.render(this.multiplier);

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  async startGame() {
    this.running = true;
    this.multiplier = 1.0;
    this.random = Math.random() * (this.max - this.min) + this.min;
    this.crashPoint = parseFloat(this.random.toFixed(2));
    await this.startCrashLoop();
  }
}
