import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceAlumnos } from '../../services/service.alumnos';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent implements OnInit {
  public alumno!: Alumno;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceAlumnos
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this._service.findAlumnoById(id).then((result) => {
        this.alumno = result;
      });
    });
  }
}
