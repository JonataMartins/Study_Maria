import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuicaoNotas } from './distribuicao-notas';

describe('DistribuicaoNotas', () => {
  let component: DistribuicaoNotas;
  let fixture: ComponentFixture<DistribuicaoNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribuicaoNotas],
    }).compileComponents();

    fixture = TestBed.createComponent(DistribuicaoNotas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
