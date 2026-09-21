import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesColaborador } from './detalhes-colaborador';

describe('DetalhesColaborador', () => {
  let component: DetalhesColaborador;
  let fixture: ComponentFixture<DetalhesColaborador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesColaborador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesColaborador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
