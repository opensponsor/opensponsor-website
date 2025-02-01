import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandcraftsComponent } from './handcrafts.component';

describe('HandcraftsComponent', () => {
  let component: HandcraftsComponent;
  let fixture: ComponentFixture<HandcraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandcraftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandcraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
