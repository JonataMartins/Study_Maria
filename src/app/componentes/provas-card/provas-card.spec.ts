import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvasCard } from './provas-card';

describe('ProvasCard', () => {
  let component: ProvasCard;
  let fixture: ComponentFixture<ProvasCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvasCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProvasCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
