import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurselvesComponent } from './ourselves.component';

describe('OurselvesComponent', () => {
  let component: OurselvesComponent;
  let fixture: ComponentFixture<OurselvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurselvesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurselvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
