import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajacont') cajacont!: ElementRef;

  constructor(private _router: Router, private _service: ServiceAlumnos) {}

  login(): void {
    let nom = this.cajanombre.nativeElement.value;
    let cont = this.cajacont.nativeElement.value;

    let user = new Login(nom, cont);
    this._service.getToken(user).then((response) => {
      const token = response;
      localStorage.setItem('token', token);
      this._router.navigate(['/alumnos']);
    });
  }
}
