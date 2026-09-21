import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloUpload } from './modelo-upload';

describe('ModeloUpload', () => {
  let component: ModeloUpload;
  let fixture: ComponentFixture<ModeloUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
