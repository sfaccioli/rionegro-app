import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AgroquimicosServiceService } from 'src/app/services/agroquimico/agroquimicos-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuevo-agroquimico',
  templateUrl: './nuevo-agroquimico.component.html',
  styleUrls: ['./nuevo-agroquimico.component.css']
})
export class NuevoAgroquimicoComponent implements OnInit {
  agroquimicoForm: FormGroup;
  validMessage: string;

  constructor(private agroquimicosService: AgroquimicosServiceService, private router: Router) { }

  ngOnInit(): void {
    this.agroquimicoForm = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      marca: new FormControl()

    });
  }

  saveNewAgroquimico() {
    if(this.agroquimicoForm.valid) {
      this.validMessage = 'Agroquimico agregado correctamente';
      this.agroquimicosService.createAgroquimico(this.agroquimicoForm.value).subscribe(
        data => {
          this.agroquimicoForm.reset();
          this.router.navigateByUrl('/agroquimicos');
          return true;
        },
        error => {
          return Observable.throw(error);
        })
    } else {
      this.validMessage = 'Por favor complete el formulario antes de guardar';
    }
  }

}
