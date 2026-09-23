import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoDevolvido } from './documento-devolvido';

describe('DocumentoDevolvido', () => {
  let component: DocumentoDevolvido;
  let fixture: ComponentFixture<DocumentoDevolvido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentoDevolvido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentoDevolvido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
