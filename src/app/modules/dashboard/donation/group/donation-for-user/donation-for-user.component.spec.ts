import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationForUserComponent } from './donation-for-user.component';

describe('DonationForUserComponent', () => {
  let component: DonationForUserComponent;
  let fixture: ComponentFixture<DonationForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationForUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
