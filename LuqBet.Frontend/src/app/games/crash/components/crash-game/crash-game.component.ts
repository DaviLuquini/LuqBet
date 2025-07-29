import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crash-game',
  templateUrl: './crash-game.component.html',
  styleUrls: ['./crash-game.component.scss']
})
export class CrashGameComponent {
  multiplier: number = 1.0;
  running: boolean = false;
  min: number = 1.1;
  max: number = 10.0;
  random: number = (Math.random() * (this.max - this.min) + this.min) ** 3.5;
  crashPoint: number = parseFloat(this.random.toFixed(2));
  @Output() multiplierReached = new EventEmitter<number>();
  yLabels = ['8.0x', '7.0x', '5.0x', '3.2x', '1.5x'];
  xLabels = ['0s', '5s', '10s', '15s', '20s'];

  @ViewChild('chartCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private points: { x: number; y: number }[] = [];
  private startTime: number = 0;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

 renderLine() {
  const canvas = this.canvasRef.nativeElement;
  const ctx = this.ctx;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(this.points[0]?.x || 0, canvas.height);

  this.points.forEach((point) => {
    const x = point.x;
    const y = canvas.height - point.y;
    ctx.lineTo(x, y);
  });

  const lastPoint = this.points[this.points.length - 1];
  if (lastPoint) {
    ctx.lineTo(lastPoint.x, canvas.height);
  }
  ctx.closePath();

  ctx.fillStyle = 'rgba(0, 255, 136, 0.15)';
  ctx.fill();

  // Linha por cima
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#00FF88';

  this.points.forEach((point, index) => {
    const x = point.x;
    const y = canvas.height - point.y;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();
}


  async startCrashLoop() {
    const canvas = this.canvasRef.nativeElement;
    this.points = [];
    this.resizeCanvas();

    const start = performance.now();
    this.startTime = start;

    const update = (time: number) => {
      if (!this.running || this.multiplier >= this.crashPoint) {
        this.running = false;
        this.multiplierReached.emit(this.multiplier);
        return;
      }

      const elapsed = (time - start) / 500;
      this.multiplier = +(1.05 ** elapsed).toFixed(2);
      this.render(this.multiplier);

      const x = (time - start) * 0.05; 
      const y = (this.multiplier / 10) * canvas.height; 

      this.points.push({ x, y });
      this.renderLine();

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  render(multiplier: number) {
    this.multiplier = parseFloat(multiplier.toFixed(2));
  }

  async startGame() {
    this.running = true;
    this.multiplier = 1.0;
    this.random = Math.random() * (this.max - this.min) + this.min;
    this.crashPoint = parseFloat(this.random.toFixed(2));
    await this.startCrashLoop();
  }
}
