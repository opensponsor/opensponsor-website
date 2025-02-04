import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPhoneNumberComponent } from './for-phone-number.component';

describe('ForPhoneNumberComponent', () => {
  let component: ForPhoneNumberComponent;
  let fixture: ComponentFixture<ForPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPhoneNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
