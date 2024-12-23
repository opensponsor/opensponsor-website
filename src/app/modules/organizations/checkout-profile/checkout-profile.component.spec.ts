import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckoutProfileComponent} from './checkout-profile.component';

describe('CheckoutProfileComponent', () => {
  let component: CheckoutProfileComponent;
  let fixture: ComponentFixture<CheckoutProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutProfileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
