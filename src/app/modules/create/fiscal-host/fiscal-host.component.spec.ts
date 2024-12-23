import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FiscalHostComponent} from './fiscal-host.component';

describe('FiscalHostComponent', () => {
  let component: FiscalHostComponent;
  let fixture: ComponentFixture<FiscalHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiscalHostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FiscalHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
