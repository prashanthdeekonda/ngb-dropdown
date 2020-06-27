import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbDropdownComponent } from './ngb-dropdown.component';

describe('NgbDropdownComponent', () => {
  let component: NgbDropdownComponent;
  let fixture: ComponentFixture<NgbDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
