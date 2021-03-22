import { TestBed } from '@angular/core/testing';

import { PhpSqlApiService } from './php-sql-api.service';

describe('PhpSqlApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhpSqlApiService = TestBed.get(PhpSqlApiService);
    expect(service).toBeTruthy();
  });
});
