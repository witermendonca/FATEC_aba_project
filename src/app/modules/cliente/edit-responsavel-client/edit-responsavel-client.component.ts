import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponsavel } from 'src/app/shared/interfaces';
import { ResponsavelService } from 'src/app/shared/services';

@Component({
  selector: 'app-edit-responsavel-client',
  templateUrl: './edit-responsavel-client.component.html',
  styleUrls: ['./edit-responsavel-client.component.scss'],
})
export class EditResponsavelClientComponent implements OnInit {
  public responsavel: IResponsavel | null = null;
  public idResponsavel: string = '0';
  public idCliente: string = '0';
  public textButton: string = 'Adicionar';

  constructor(
    private route: ActivatedRoute,
    private service: ResponsavelService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.idResponsavel = this.route.snapshot.queryParams['responsavel'] || '0';
    this.idCliente = this.route.snapshot.queryParams['cliente'] || '0';

    if (this.idCliente !== '0' && this.idResponsavel !== '0') {
      this.bucarResponsavel(parseInt(this.idResponsavel));
    }
  }

  bucarResponsavel(id: number): void {
    this.service.getResponsibleByid(id).subscribe({
      next: response => {
        this.responsavel = response;
        this.textButton = 'Editar';
      },
      error: err => console.error(err),
    });
  }

  EditResponsavel(event: IResponsavel): void {
    if (this.idResponsavel === '0') {
      event.idClient = parseInt(this.idCliente);
      this.service.saveResponsible(event).subscribe({
        next: () => {
          this.router.navigate(['cliente', this.idCliente]);
        },
        error: err => console.error(err),
      });
      return;
    }

    this.service.updateResponsavel(event, parseInt(this.idResponsavel)).subscribe({
      next: () => {
        this.router.navigate(['cliente', this.idCliente]);
      },
      error: err => console.error(err),
    });
  }

  excluirResponsavel(event: number): void {
    this.service.deleteResponsavel(event).subscribe({
      next: () => {
        this.router.navigate(['cliente', this.idCliente]);
      },
      error: err => console.error(err),
    });
  }
}
