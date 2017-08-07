import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDropdownComponent } from './att-dropdown.component';

describe('AttDropdownComponent', () => {
  let component: AttDropdownComponent;
  let fixture: ComponentFixture<AttDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
