import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCodeButtonComponent } from './sms-code-button.component';

describe('SmsCodeButtonComponent', () => {
  let component: SmsCodeButtonComponent;
  let fixture: ComponentFixture<SmsCodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsCodeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
