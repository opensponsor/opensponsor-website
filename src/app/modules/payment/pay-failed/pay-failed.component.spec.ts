import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFailedComponent } from './pay-failed.component';

describe('PayFailedComponent', () => {
  let component: PayFailedComponent;
  let fixture: ComponentFixture<PayFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayFailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
