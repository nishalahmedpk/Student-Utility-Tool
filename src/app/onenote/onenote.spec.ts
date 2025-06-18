import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onenote } from './onenote';

describe('Onenote', () => {
  let component: Onenote;
  let fixture: ComponentFixture<Onenote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onenote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onenote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
