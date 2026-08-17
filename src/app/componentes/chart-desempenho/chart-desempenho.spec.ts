import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDesempenho } from './chart-desempenho';

describe('ChartDesempenho', () => {
  let component: ChartDesempenho;
  let fixture: ComponentFixture<ChartDesempenho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartDesempenho],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartDesempenho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
