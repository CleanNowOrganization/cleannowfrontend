import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequiredComponent } from './required.component';

describe('RequiredComponent', () => {
  let component: RequiredComponent;
  let fixture: ComponentFixture<RequiredComponent>;

  beforeEach(async () => {
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ RequiredComponent ]
      }).compileComponents();
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
