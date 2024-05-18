import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierCardComponent } from './tier-card.component';

describe('TierCardComponent', () => {
  let component: TierCardComponent;
  let fixture: ComponentFixture<TierCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
