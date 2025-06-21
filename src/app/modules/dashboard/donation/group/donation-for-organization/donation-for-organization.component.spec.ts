import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationForOrganizationComponent } from './donation-for-organization.component';

describe('DonationForOrganizationComponent', () => {
  let component: DonationForOrganizationComponent;
  let fixture: ComponentFixture<DonationForOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationForOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationForOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
