import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Login } from '../models/login';
import { environment } from '../../environments/environment.development';
import axios from 'axios';

@Injectable()
export class ServiceAlumnos {
  getToken(user: Login): Promise<any> {
    const url = `${environment.urlApiAlumnos}/api/auth/login`;
    return axios.post(url, user).then((response) => response.data.response);
  }

  getAlumnos(): Promise<any> {
    const url = `${environment.urlApiAlumnos}/api/alumnos/alumnostoken`;
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(url, { headers }).then((response) => response.data);
  }

  getCursos(): Promise<any> {
    const url = `${environment.urlApiAlumnos}/api/alumnos/cursostoken`;
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(url, { headers }).then((response) => response.data);
  }

  getAlumnosCursos(idcurso: number): Promise<any> {
    const token = localStorage.getItem('token');
    const url = `${environment.urlApiAlumnos}/api/alumnos/filtrarcurso/${idcurso}`;
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(url, { headers }).then((response) => response.data);
  }

  createAlumno(alumno: Alumno): Promise<any> {
    const token = localStorage.getItem('token');
    const url = `${environment.urlApiAlumnos}/api/alumnos/insertalumnotoken`;
    const headers = { Authorization: `Bearer ${token}` };
    return axios
      .post(url, alumno, { headers })
      .then((response) => response.data);
  }

  findAlumnoById(idAlumno: number): Promise<any> {
    const token = localStorage.getItem('token');
    const url = `${environment.urlApiAlumnos}/api/alumnos/findalumnotoken/${idAlumno}`;
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(url, { headers }).then((response) => response.data);
  }
}
