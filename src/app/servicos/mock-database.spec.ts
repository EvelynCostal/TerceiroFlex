import { TestBed } from '@angular/core/testing';

import { MockDatabase } from './mock-database';

describe('MockDatabase', () => {
  let service: MockDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
