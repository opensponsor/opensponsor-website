import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForGithubComponent } from './apply-for-github.component';

describe('ApplyForGithubComponent', () => {
  let component: ApplyForGithubComponent;
  let fixture: ComponentFixture<ApplyForGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForGithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
