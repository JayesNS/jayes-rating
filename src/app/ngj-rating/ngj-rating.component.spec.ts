import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgjRatingComponent } from './ngj-rating.component';
import { NgjRoundPipe } from './ngj-round.pipe';
import { NgjRatingOptions } from './ngj-rating-options.service';

describe('NgjRatingComponent', () => {
  let component: NgjRatingComponent;
  let fixture: ComponentFixture<NgjRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgjRatingComponent, NgjRoundPipe, NgjRatingOptions]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgjRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
