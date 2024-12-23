import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckoutStartComponent} from './checkout-start.component';

describe('CheckoutStartComponent', () => {
  let component: CheckoutStartComponent;
  let fixture: ComponentFixture<CheckoutStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutStartComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
