import { TestBed } from '@angular/core/testing';

import { MyschoolserviceService } from './myschoolservice.service';

describe('MyschoolserviceService', () => {
  let service: MyschoolserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyschoolserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
