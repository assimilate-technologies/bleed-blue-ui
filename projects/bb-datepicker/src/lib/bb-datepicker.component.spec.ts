import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbDatepickerComponent } from './bb-datepicker.component';

describe('BbDatepickerComponent', () => {
  let component: BbDatepickerComponent;
  let fixture: ComponentFixture<BbDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
