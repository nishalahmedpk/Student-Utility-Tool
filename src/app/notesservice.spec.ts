import { TestBed } from '@angular/core/testing';

import { Notesservice } from './notesservice';

describe('Notesservice', () => {
  let service: Notesservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Notesservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
