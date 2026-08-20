import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTurma } from './card-turma';

describe('CardTurma', () => {
  let component: CardTurma;
  let fixture: ComponentFixture<CardTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
