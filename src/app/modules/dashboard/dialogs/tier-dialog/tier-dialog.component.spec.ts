import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TierDialogComponent} from './tier-dialog.component';

describe('TierDialogComponent', () => {
  let component: TierDialogComponent;
  let fixture: ComponentFixture<TierDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
