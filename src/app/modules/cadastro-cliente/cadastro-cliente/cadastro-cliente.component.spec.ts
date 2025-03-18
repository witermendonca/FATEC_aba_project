import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroClienteComponent } from './cadastro-cliente.component';

describe('CadastroClienteComponent', () => {
  let component: CadastroClienteComponent;
  let fixture: ComponentFixture<CadastroClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroClienteComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule, NoopAnimationsModule],
      providers: [],
    });
    fixture = TestBed.createComponent(CadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
