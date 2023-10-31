import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {
  nombreUsuario: string = 'Sin Nombre.....!!!'
  private urlLogin = 'http://localhost:4000/api/login/';
  private urlRegister = 'http://localhost:4000/api/create-user/crear-usuario'; 

  constructor(private http: HttpClient) { }

  login(user: Usuario): Observable<any> {
    return this.http.post(this.urlLogin, user);
  }

  register(user: Usuario): Observable<any> {
    return this.http.post(this.urlRegister, user);
  }
}

