import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStatesComponent } from './empty-states.component';

describe('EmptyStatesComponent', () => {
  let component: EmptyStatesComponent;
  let fixture: ComponentFixture<EmptyStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
