import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMultiplierComponent } from './card-multiplier.component';

describe('CardMultiplierComponent', () => {
  let component: CardMultiplierComponent;
  let fixture: ComponentFixture<CardMultiplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMultiplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
