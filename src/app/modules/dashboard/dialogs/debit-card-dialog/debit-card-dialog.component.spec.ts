import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DebitCardDialogComponent} from './debit-card-dialog.component';

describe('DebitCardDialogComponent', () => {
  let component: DebitCardDialogComponent;
  let fixture: ComponentFixture<DebitCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitCardDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DebitCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
