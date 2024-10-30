import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResponsavelComponent } from './cadastro-responsavel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataClienteService } from '../service/data-cliente.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CadastroResponsavelComponent', () => {
  let component: CadastroResponsavelComponent;
  let fixture: ComponentFixture<CadastroResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroResponsavelComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        FormResponsavelComponent,
        NoopAnimationsModule,
      ],
      providers: [
        DataClienteService,
      ]
    });
    fixture = TestBed.createComponent(CadastroResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
