import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationInfoLayoutComponent } from './organization-info-layout.component';

describe('OrganizationInfoLayoutComponent', () => {
  let component: OrganizationInfoLayoutComponent;
  let fixture: ComponentFixture<OrganizationInfoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationInfoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationInfoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
