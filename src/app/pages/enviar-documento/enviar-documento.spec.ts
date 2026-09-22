import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDocumento } from './enviar-documento';

describe('EnviarDocumento', () => {
  let component: EnviarDocumento;
  let fixture: ComponentFixture<EnviarDocumento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarDocumento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarDocumento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
