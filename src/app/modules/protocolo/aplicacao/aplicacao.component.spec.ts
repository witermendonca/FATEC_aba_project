import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { ProtocoloService } from 'src/app/shared/services';
import { AplicacaoService } from 'src/app/shared/services/aplicacao/aplicacao.service';
import { AplicacaoComponent } from './aplicacao.component';

describe('AplicacaoComponent', () => {
  let component: AplicacaoComponent;
  let fixture: ComponentFixture<AplicacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicacaoComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [ProtocoloService, AplicacaoService],
    });
    fixture = TestBed.createComponent(AplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
