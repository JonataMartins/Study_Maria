import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNotification } from './head-notification';

describe('HeadNotification', () => {
  let component: HeadNotification;
  let fixture: ComponentFixture<HeadNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadNotification],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadNotification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
