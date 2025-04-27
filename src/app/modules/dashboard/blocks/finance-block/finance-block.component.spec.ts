import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceBlockComponent } from './finance-block.component';

describe('FinanceBlockComponent', () => {
  let component: FinanceBlockComponent;
  let fixture: ComponentFixture<FinanceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
