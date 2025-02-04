import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPhoneGroupComponent } from './country-phone-group.component';

describe('CountryPhoneGroupComponent', () => {
  let component: CountryPhoneGroupComponent;
  let fixture: ComponentFixture<CountryPhoneGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPhoneGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPhoneGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
