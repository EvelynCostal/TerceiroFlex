import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quickscan } from './quickscan';

describe('Quickscan', () => {
  let component: Quickscan;
  let fixture: ComponentFixture<Quickscan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quickscan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quickscan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
