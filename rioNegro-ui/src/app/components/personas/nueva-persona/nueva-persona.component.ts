import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/persona/personas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {
  personaForm: FormGroup;
  validMessage : string = '';

  constructor(private personasService: PersonasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personaForm = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      telefono: new FormControl(),
      fecha_nacimiento: new FormControl(),
      rol: new FormControl()
    });
  }

  saveNewPerson() {
    if (this.personaForm.valid) {
      this.personaForm.value.fecha_nacimiento = this.personaForm.value.fecha_nacimiento.toISOString().slice(0,10)
      this.validMessage = 'Persona agregada correctamente';
      this.personasService.createPersona(this.personaForm.value).subscribe(
        data => {
          this.personaForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = 'Por favor complete el formulario antes de guardar';
    }
  }

}
