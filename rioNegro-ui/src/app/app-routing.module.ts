import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { PersonasComponent } from './components/personas/personas.component';
import { HomeComponent } from './components/home/home.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { AgroquimicosComponent } from './components/agroquimicos/agroquimicos.component';
import { AgroquimicoDetalleComponent } from './components/agroquimicos/detalle/detalle.component';
import { PersonaDetalleComponent } from './components/personas/detalle/detalle.component';
import { NuevaPersonaComponent } from './components/personas/nueva-persona/nueva-persona.component';
import { NuevoAgroquimicoComponent } from './components/agroquimicos/nuevo-agroquimico/nuevo-agroquimico.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'personas/nuevo',
    component: NuevaPersonaComponent
  },
  {
    path: 'personas/:id',
    component: PersonaDetalleComponent
  },
  {
    path: 'empresas',
    component: EmpresasComponent
  },
  {
    path: 'agroquimicos',
    component: AgroquimicosComponent
  },
  {
    path: 'agroquimicos/nuevo',
    component: NuevoAgroquimicoComponent
  },
  {
    path: 'agroquimicos/:id',
    component: AgroquimicoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
