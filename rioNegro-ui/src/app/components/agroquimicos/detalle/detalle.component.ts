import { Component, OnInit } from '@angular/core';
import { AgroquimicosServiceService } from 'src/app/services/agroquimico/agroquimicos-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class AgroquimicoDetalleComponent implements OnInit {
  public agroquimico;
  public loaded = false;

  constructor(private agroquimicosService: AgroquimicosServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAgroquimico(this.route.snapshot.params.id);
  }

  getAgroquimico(id: number) {
    this.agroquimicosService.getAgroquimico(id).subscribe(
      data => {
        this.agroquimico = data;
        this.loaded = true;
      },
      err => console.log(err),
      () => console.log('Agroquimico loaded')
    );
  }

}
