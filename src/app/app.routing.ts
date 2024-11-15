import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { AlumnosCursoComponent } from './components/alumnos-curso/alumnos-curso.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { EliminarAlumnoComponent } from './components/eliminar-alumno/eliminar-alumno.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'alumnoscurso/:id', component: AlumnosCursoComponent },
  { path: 'create', component: CrearAlumnoComponent },
  { path: 'delete/:id', component: EliminarAlumnoComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
