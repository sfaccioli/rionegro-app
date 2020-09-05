import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PersonasDataSource, PersonasItem } from './personas-datasource';
import { PersonasService } from 'src/app/services/persona/personas.service';
import { HttpClient } from '@angular/common/http';

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
  displayedColumns = ['id', 'nombre', 'apellido', 'telefono', 'fecha_nacimiento', 'rol', 'editar'];

  constructor(private http: HttpClient) {}

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
}
