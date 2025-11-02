import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPaymentMethodsComponent } from './setting-payment-methods.component';

describe('SettingPaymentMethodsComponent', () => {
  let component: SettingPaymentMethodsComponent;
  let fixture: ComponentFixture<SettingPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingPaymentMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
