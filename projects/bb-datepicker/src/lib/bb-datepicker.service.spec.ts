import { TestBed } from '@angular/core/testing';

import { BbDatepickerService } from './bb-datepicker.service';

describe('BbDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbDatepickerService = TestBed.get(BbDatepickerService);
    expect(service).toBeTruthy();
  });
});
