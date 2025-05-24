import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlipayCallbackComponent } from './alipay-callback.component';

describe('AlipayCallbackComponent', () => {
  let component: AlipayCallbackComponent;
  let fixture: ComponentFixture<AlipayCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlipayCallbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlipayCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
