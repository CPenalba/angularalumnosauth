import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent implements OnInit {
  public alumnos!: Array<Alumno>;

  constructor(private _service: ServiceAlumnos, private _router: Router) {}

  ngOnInit(): void {
    this._service.getAlumnos().then((response) => {
      this.alumnos = response;
    });
  }
}
