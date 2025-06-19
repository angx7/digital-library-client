import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroFormularioComponent } from './libro-formulario.component';

describe('LibroFormularioComponent', () => {
  let component: LibroFormularioComponent;
  let fixture: ComponentFixture<LibroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
