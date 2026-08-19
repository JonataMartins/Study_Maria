import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosDestaqueCard } from './alunos-destaque-card';

describe('AlunosDestaqueCard', () => {
  let component: AlunosDestaqueCard;
  let fixture: ComponentFixture<AlunosDestaqueCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosDestaqueCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunosDestaqueCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
