import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsListComponent } from './contributors-list.component';

describe('ContributorsListComponent', () => {
  let component: ContributorsListComponent;
  let fixture: ComponentFixture<ContributorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributorsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
