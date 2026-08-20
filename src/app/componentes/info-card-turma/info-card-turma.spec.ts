import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardTurma } from './info-card-turma';

describe('InfoCardTurma', () => {
  let component: InfoCardTurma;
  let fixture: ComponentFixture<InfoCardTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCardTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
