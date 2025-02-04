import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSmsCodeComponent } from './for-sms-code.component';

describe('ForSmsCodeComponent', () => {
  let component: ForSmsCodeComponent;
  let fixture: ComponentFixture<ForSmsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSmsCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSmsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
