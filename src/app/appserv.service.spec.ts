import { TestBed } from '@angular/core/testing';

import { AppservService } from './appserv.service';

describe('AppservService', () => {
  let service: AppservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
