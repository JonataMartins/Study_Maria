import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoItem } from './aluno-item';

describe('AlunoItem', () => {
  let component: AlunoItem;
  let fixture: ComponentFixture<AlunoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
