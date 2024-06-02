import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingMoneyComponent } from './sending-money.component';

describe('SendingMoneyComponent', () => {
  let component: SendingMoneyComponent;
  let fixture: ComponentFixture<SendingMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendingMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendingMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
