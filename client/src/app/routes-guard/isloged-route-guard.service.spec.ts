import { TestBed } from '@angular/core/testing';

import { IslogedRouteGuardService } from './isloged-route-guard.service';

describe('IslogedRouteGuardService', () => {
  let service: IslogedRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslogedRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
