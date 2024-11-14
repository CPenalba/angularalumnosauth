import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { ModificarAlumnoComponent } from './components/modificar-alumno/modificar-alumno.component';
import { appRoutingProvider, routing } from './app.routing';
import { provideHttpClient } from '@angular/common/http';
import { ServiceAlumnos } from './services/service.alumnos';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    CrearAlumnoComponent,
    ModificarAlumnoComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProvider, provideHttpClient(), ServiceAlumnos],
  bootstrap: [AppComponent],
})
export class AppModule {}
