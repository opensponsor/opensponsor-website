import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopStatusComponent } from './develop-status.component';

describe('DevelopStatusComponent', () => {
  let component: DevelopStatusComponent;
  let fixture: ComponentFixture<DevelopStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
