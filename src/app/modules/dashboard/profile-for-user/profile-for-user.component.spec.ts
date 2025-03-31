import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForUserComponent } from './profile-for-user.component';

describe('ProfileForUserComponent', () => {
  let component: ProfileForUserComponent;
  let fixture: ComponentFixture<ProfileForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileForUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
