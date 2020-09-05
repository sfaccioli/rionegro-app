import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AgroquimicosDataSource, AgroquimicosItem } from './agroquimicos-datasource';
import { AgroquimicosServiceService } from 'src/app/services/agroquimico/agroquimicos-service.service';
import { HttpClient } from '@angular/common/http';

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
  displayedColumns = ['id', 'nombre', 'marca', 'descripcion'];

  constructor(private http: HttpClient) {}

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
}
