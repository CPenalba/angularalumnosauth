import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { ModificarAlumnoComponent } from './components/modificar-alumno/modificar-alumno.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear', component: CrearAlumnoComponent },
  { path: 'modificar', component: ModificarAlumnoComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
