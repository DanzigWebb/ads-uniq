import { TestBed } from '@angular/core/testing';

import { FoldersCheckService } from './folders-check.service';

describe('FoldersCheckService', () => {
  let service: FoldersCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldersCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
