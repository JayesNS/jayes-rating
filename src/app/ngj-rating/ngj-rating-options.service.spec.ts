import { TestBed, inject } from '@angular/core/testing';

import { NgjRatingOptions } from './ngj-rating-options.service';

describe('NgjRatingOptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgjRatingOptions]
    });
  });

  it('should be created', inject([NgjRatingOptions], (service: NgjRatingOptions) => {
    expect(service).toBeTruthy();
  }));
});
