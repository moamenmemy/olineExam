import { TestBed } from '@angular/core/testing';

import { ExamOnSubjectService } from './exam-on-subject.service';

describe('ExamOnSubjectService', () => {
  let service: ExamOnSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamOnSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
