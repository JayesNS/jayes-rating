import { TestBed, inject } from '@angular/core/testing';

import { NgjRatingOptionsService } from './ngj-rating-options.service';

describe('NgjRatingOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgjRatingOptionsService]
    });
  });

  it('should be created', inject([NgjRatingOptionsService], (service: NgjRatingOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
