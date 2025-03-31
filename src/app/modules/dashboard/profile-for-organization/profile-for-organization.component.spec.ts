import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForOrganizationComponent } from './profile-for-organization.component';

describe('ProfileForOrganizationComponent', () => {
  let component: ProfileForOrganizationComponent;
  let fixture: ComponentFixture<ProfileForOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileForOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileForOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
