import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { PersonasService } from 'src/app/services/persona/personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { PersonasItem } from '../personas-datasource';
import { PersonasComponent } from '../personas.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {
  //public persona;
  public loaded = false;
  public startingDate;
  public valueChange = false;
  @Input() persona;


  constructor(private personasService: PersonasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPersona(this.route.snapshot.params.id);
  }

  getPersona(id: number) {
    this.personasService.getPersona(id).subscribe(
      data => {
        this.persona = data;
        if(this.persona.fecha_nacimiento) {
        var replacedDate = new Date( this.persona.fecha_nacimiento.replace( /(\d{2})-(\d{2})-(\d{4})/, "$3/$2/$1"));
        this.persona.fecha_nacimiento = this.getDate(replacedDate);
        }
        this.loaded = true;
      },
      err => console.log(err),
      () => console.log('Persona loaded')
    );
  }

  updatePersona(id: number, persona) {
    if(persona.fecha_nacimiento) {
      persona.fecha_nacimiento = persona.fecha_nacimiento.toISOString().slice(0,10);
    }
  
    this.personasService.updatePersona(this.route.snapshot.params.id, persona).subscribe(
      data => {
        this.persona = data;
        if(persona.fecha_nacimiento) {
          var replacedDate = new Date( this.persona.fecha_nacimiento.replace( /(\d{2})-(\d{2})-(\d{4})/, "$3/$2/$1"));
          this.persona.fecha_nacimiento = this.getDate(replacedDate);
        }
        this.router.navigateByUrl('/personas');
      },
      err => console.log(err),
      () => console.log('Persona updated')
    );
  }

  getDate(dateToChange) {
    const date = new Date(dateToChange);
    const offset = date.getTimezoneOffset();
      if (offset < 0) {
          date.setHours(12,0,0);
      }
      if (offset > 0) {
        date.setDate(date.getDate() + 1);
      }
    return date.toISOString().substring(0,10);
  }

  

}
