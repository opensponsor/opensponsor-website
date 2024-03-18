import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureLayoutComponent } from './pure-layout.component';

describe('PureLayoutComponent', () => {
  let component: PureLayoutComponent;
  let fixture: ComponentFixture<PureLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
