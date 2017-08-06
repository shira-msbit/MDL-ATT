import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttButtonComponent } from './att-button.component';

describe('AttButtonComponent', () => {
  let component: AttButtonComponent;
  let fixture: ComponentFixture<AttButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
