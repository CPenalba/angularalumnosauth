import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceAlumnos } from '../../services/service.alumnos';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrl: './eliminar-alumno.component.css',
})
export class EliminarAlumnoComponent implements OnInit {
  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceAlumnos,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this._service.deleteAlumno(id).then((result) => {
        console.log(result);
        this._router.navigate(['/alumnos']);
      });
    });
  }
}
