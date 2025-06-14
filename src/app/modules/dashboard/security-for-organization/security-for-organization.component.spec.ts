import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityForOrganizationComponent } from './security-for-organization.component';

describe('SecurityForOrganizationComponent', () => {
  let component: SecurityForOrganizationComponent;
  let fixture: ComponentFixture<SecurityForOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityForOrganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityForOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
