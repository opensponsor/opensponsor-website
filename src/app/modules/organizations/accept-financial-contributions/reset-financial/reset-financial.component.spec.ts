import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFinancialComponent } from './reset-financial.component';

describe('ResetFinancialComponent', () => {
  let component: ResetFinancialComponent;
  let fixture: ComponentFixture<ResetFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetFinancialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
