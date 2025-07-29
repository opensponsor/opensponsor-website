import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInNewComponent } from './open-in-new.component';

describe('OpenInNewComponent', () => {
  let component: OpenInNewComponent;
  let fixture: ComponentFixture<OpenInNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenInNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenInNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
