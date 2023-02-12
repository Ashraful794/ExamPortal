import { TestBed } from '@angular/core/testing';

import { QuizAttemptsService } from './quiz-attempts.service';

describe('QuizAttemptsService', () => {
  let service: QuizAttemptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAttemptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
