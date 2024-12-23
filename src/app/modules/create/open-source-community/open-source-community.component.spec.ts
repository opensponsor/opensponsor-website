import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OpenSourceCommunityComponent} from './open-source-community.component';

describe('OpenSourceCommunityComponent', () => {
  let component: OpenSourceCommunityComponent;
  let fixture: ComponentFixture<OpenSourceCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenSourceCommunityComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OpenSourceCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
