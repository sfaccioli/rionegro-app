import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PersonasService } from 'src/app/services/persona/personas.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgroquimicosServiceService } from 'src/app/services/agroquimico/agroquimicos-service.service';

@Component({
  selector: 'app-dialogo-eliminacion',
  templateUrl: './dialogo-eliminacion.component.html',
  styleUrls: ['./dialogo-eliminacion.component.css']
})
export class DialogoEliminacionComponent implements OnInit {

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<DialogoEliminacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
    
  }

  ngOnInit(): void {
  }

  onAceptarClick() {
    switch(this.data.tipo) {
      case 'persona' :
        var personasService = new PersonasService(this.http);
        personasService.deletePersona(this.data.id).subscribe(
          data => {
            console.log('Persona eliminada correctamente');
            return true;
          },
          error => {
            return Observable.throw(error);
          }
        );
        break;
      case 'agroquimico' :
        var agroquimicosService = new AgroquimicosServiceService(this.http);
        agroquimicosService.deleteAgroquimico(this.data.id).subscribe(
          data => {
            console.log('Agroquiimco eliminado correctamente');
            return true;
          },
          error => {
            return Observable.throw(error);
          }
        );
        break;  
    }
    
    this.dialogRef.close();
  }

}
