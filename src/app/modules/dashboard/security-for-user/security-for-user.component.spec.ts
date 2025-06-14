import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityForUserComponent } from './security-for-user.component';

describe('SecurityForUserComponent', () => {
  let component: SecurityForUserComponent;
  let fixture: ComponentFixture<SecurityForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityForUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
