import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checTokenGuard } from './chec-token.guard';

describe('checTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
