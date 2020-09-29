import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PersonasDataSource, PersonasItem } from './personas-datasource';
import { PersonasService } from 'src/app/services/persona/personas.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogoEliminacionComponent } from '../dialogo-eliminacion/dialogo-eliminacion.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PersonasItem>;
  dataSource: PersonasDataSource;
  dataPersons: PersonasItem[];
  personasService = new PersonasService(this.http);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['eliminar', 'id', 'nombre', 'apellido', 'telefono', 'fecha_nacimiento', 'rol','editar', 'agregar'];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.getPersons();
  }

  ngAfterViewInit() {
  }

  getPersons() {
    this.personasService.getPersonas().subscribe(
      data => {
        this.dataPersons = data;
        this.dataSource = new PersonasDataSource(this.dataPersons);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      },
      err => console.log(err),
      () => console.log('Personas loaded')
    );
  }

  openDialog(nombre, apellido, idPersona) {
    const dialogRef = this.dialog.open(DialogoEliminacionComponent, {
      data: {
        mensaje: '¿Está seguro que quiere eliminar a ' + nombre + ' ' +  apellido + '?',
        id: idPersona,
        tipo: 'persona'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(!res) {
        this.getPersons();
      }
      console.log(res);
    });
  }

}
