import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormResponsavelComponent } from './form-responsavel.component';

describe('FormResponsavelComponent', () => {
  let component: FormResponsavelComponent;
  let fixture: ComponentFixture<FormResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormResponsavelComponent, NoopAnimationsModule, ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(FormResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
