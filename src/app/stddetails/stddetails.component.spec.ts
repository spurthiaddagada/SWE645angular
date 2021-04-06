import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StddetailsComponent } from './stddetails.component';

describe('StddetailsComponent', () => {
  let component: StddetailsComponent;
  let fixture: ComponentFixture<StddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
