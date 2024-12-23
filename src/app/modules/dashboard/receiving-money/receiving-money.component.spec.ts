import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReceivingMoneyComponent} from './receiving-money.component';

describe('ReceivingMoneyComponent', () => {
  let component: ReceivingMoneyComponent;
  let fixture: ComponentFixture<ReceivingMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingMoneyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReceivingMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
