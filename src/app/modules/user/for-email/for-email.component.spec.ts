import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEmailComponent } from './for-email.component';

describe('ForEmailComponent', () => {
  let component: ForEmailComponent;
  let fixture: ComponentFixture<ForEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
