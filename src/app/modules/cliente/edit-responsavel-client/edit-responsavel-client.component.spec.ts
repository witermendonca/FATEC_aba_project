import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ResponsavelService } from 'src/app/shared/services';
import { EditResponsavelClientComponent } from './edit-responsavel-client.component';

describe('EditResponsavelClientComponent', () => {
  let component: EditResponsavelClientComponent;
  let fixture: ComponentFixture<EditResponsavelClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResponsavelClientComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        FormResponsavelComponent,
        NoopAnimationsModule,
      ],
      providers: [ResponsavelService],
    });
    fixture = TestBed.createComponent(EditResponsavelClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
