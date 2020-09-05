import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmpresasDataSource, EmpresasItem } from './empresas-datasource';
import { HttpClient } from '@angular/common/http';
import { EmpresaServiceService } from 'src/app/services/empresa/empresa-service.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<EmpresasItem>;
  dataSource: EmpresasDataSource;
  dataEmpresas: EmpresasItem[];
  empresasService = new EmpresaServiceService(this.http);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'razon_social', 'cuit', 'telefono'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEmpresas();
  }

  ngAfterViewInit() {
  }

  getEmpresas() {
    this.empresasService.getEmpresas().subscribe(
      data => {
        this.dataEmpresas = data;
        this.dataSource = new EmpresasDataSource(this.dataEmpresas);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      },
      err => console.log(err),
      () => console.log('Empresas loaded')
    )
  }
}
