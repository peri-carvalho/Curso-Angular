import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  getFuncionarios() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/api'; // URL do backend

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(funcionario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/funcionarios`, funcionario);
  }

  getUniversos(): Observable<any> {
    // implementation here
    return this.http.get('http://localhost:3000/api/universos');
  }
  // In cadastro.service.ts
  getGalaxias(): Observable<any> {
  // implementation here
  return this.http.get('http://localhost:3000/api/galaxias');
}

// In cadastro.service.ts
getPlanetas(): Observable<any> {
  // implementation here
  return this.http.get('http://localhost:3000/api/planetas');
}

// In cadastro.service.ts
getMapas(): Observable<any> {
  // implementation here
  return this.http.get('http://localhost:3000/api/mapas');
}
}
