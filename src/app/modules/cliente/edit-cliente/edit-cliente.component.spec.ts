import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from 'src/app/shared/services';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditClienteComponent } from './edit-cliente.component';

describe('EditClienteComponent', () => {
  let component: EditClienteComponent;
  let fixture: ComponentFixture<EditClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClienteComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule, NoopAnimationsModule],
      providers: [ClienteService],
    });
    fixture = TestBed.createComponent(EditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
