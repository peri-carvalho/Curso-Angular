import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/loginResponse.type';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient: HttpClient) { }

  login(name: string, password: string){
    return this.httpClient.post<LoginResponse>("/login", {name, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token),
        sessionStorage.setItem("name", value.name)
      })
    )
  }
}
  /* DTO
  login(login: Login){
    return this.httpClient.post<LoginResponse>("/login", {login}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token),
        sessionStorage.setItem("name", value.name)
      })
    )
  }
  Tentativa login local
  export class LoginService {
  private apiUrl = 'http://192.168.15.86:8080/login';  // Replace with your server's actual URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }
}
*/
