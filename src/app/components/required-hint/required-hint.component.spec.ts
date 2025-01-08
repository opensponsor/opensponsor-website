import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredHintComponent } from './required-hint.component';

describe('RequiredHintComponent', () => {
  let component: RequiredHintComponent;
  let fixture: ComponentFixture<RequiredHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequiredHintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
