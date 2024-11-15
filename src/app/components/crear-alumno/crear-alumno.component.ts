import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css',
})
export class CrearAlumnoComponent {
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajaapellidos') cajaapellidos!: ElementRef;
  @ViewChild('cajaimagen') cajaimagen!: ElementRef;
  @ViewChild('cajaactivo') cajaactivo!: ElementRef;
  @ViewChild('cajaidCurso') cajaidCurso!: ElementRef;

  constructor(private _service: ServiceAlumnos, private _router: Router) {}
  createAlumno(): void {
    let nombre = this.cajanombre.nativeElement.value;
    let apell = this.cajaapellidos.nativeElement.value;
    let img = this.cajaimagen.nativeElement.value;
    let act = parseInt(this.cajaactivo.nativeElement.value);
    let idcurso = parseInt(this.cajaidCurso.nativeElement.value);

    let alumno = new Alumno(0, nombre, apell, img, act, idcurso);

    this._service.createAlumno(alumno).then((result) => {
      this._router.navigate(['/alumnoscurso/' + idcurso]);
    });
  }
}
