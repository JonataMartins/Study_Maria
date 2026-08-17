import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provas } from './provas';

describe('Provas', () => {
  let component: Provas;
  let fixture: ComponentFixture<Provas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Provas],
    }).compileComponents();

    fixture = TestBed.createComponent(Provas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
