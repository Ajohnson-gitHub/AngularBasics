import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentabComponent } from './opentab.component';

describe('OpentabComponent', () => {
  let component: OpentabComponent;
  let fixture: ComponentFixture<OpentabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpentabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
