import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClienteComponent } from './edit-cliente.component';
import { ClienteService } from 'src/app/shared/services';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';
import { ExpansionPanelResponsavelComponent } from 'src/app/shared/components/expansion-panel-responsavel/expansion-panel-responsavel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditClienteComponent', () => {
  let component: EditClienteComponent;
  let fixture: ComponentFixture<EditClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClienteComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        NoopAnimationsModule,
      ],
      providers: [
        ClienteService,
      ]
    });
    fixture = TestBed.createComponent(EditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
