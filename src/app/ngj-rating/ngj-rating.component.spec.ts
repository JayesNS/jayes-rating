import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayesRatingComponent } from './jayes-rating.component';

describe('JayesRatingComponent', () => {
  let component: JayesRatingComponent;
  let fixture: ComponentFixture<JayesRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayesRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayesRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
