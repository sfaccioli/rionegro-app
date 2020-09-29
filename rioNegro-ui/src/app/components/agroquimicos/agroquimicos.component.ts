import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AgroquimicosDataSource, AgroquimicosItem } from './agroquimicos-datasource';
import { AgroquimicosServiceService } from 'src/app/services/agroquimico/agroquimicos-service.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogoEliminacionComponent } from '../dialogo-eliminacion/dialogo-eliminacion.component';

@Component({
  selector: 'app-agroquimicos',
  templateUrl: './agroquimicos.component.html',
  styleUrls: ['./agroquimicos.component.css']
})
export class AgroquimicosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AgroquimicosItem>;
  dataSource: AgroquimicosDataSource;
  dataAgroquimicos: AgroquimicosItem[];
  agroquimicosService = new AgroquimicosServiceService(this.http);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['eliminar', 'id', 'nombre', 'marca', 'descripcion', 'tipo', 'acciones', 'agregar'];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAgroquimicos();
  }

  ngAfterViewInit() {
  }

  getAgroquimicos() {
    this.agroquimicosService.getAgroquimicos().subscribe(
      data => {
        this.dataAgroquimicos = data;
        this.dataSource = new AgroquimicosDataSource(this.dataAgroquimicos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      },
      err => console.log(err),
      () => console.log('Agroquimicos loaded')
    )
  }

  openDialog(nombre, idAgroquimico) {
    const dialogRef = this.dialog.open(DialogoEliminacionComponent, {
      data: {
        mensaje: '¿Está seguro que quiere eliminar el agroquimico ' + nombre + '?',
        id: idAgroquimico,
        tipo: 'agroquimico'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(!res) {
        this.getAgroquimicos();
      }
      console.log(res);
    });
  }

}
