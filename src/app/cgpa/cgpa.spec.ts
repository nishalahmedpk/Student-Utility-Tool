import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cgpa } from './cgpa';

describe('Cgpa', () => {
  let component: Cgpa;
  let fixture: ComponentFixture<Cgpa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cgpa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cgpa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
