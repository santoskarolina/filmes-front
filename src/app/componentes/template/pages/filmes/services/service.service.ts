import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClassificacaoModel } from '../models/classificacao.model';
import { FilmeModel } from '../models/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  findAllFilmes(): Observable<FilmeModel[]>{
    const url = `${this.baseUrl}/api/filmes`;
    return this.http.get<FilmeModel[]>(url);
  }

  novoFilme(novoFilme : FilmeModel): Observable<FilmeModel>{
    const url = `${this.baseUrl}/api/filmes`;
    return this.http.post<FilmeModel>(url, novoFilme);
  }

  findById(id : string): Observable<FilmeModel>{
    const url = `${this.baseUrl}/api/filmes/${id}`;
    return this.http.get<FilmeModel>(url);
  }

  delete(id : string): Observable<FilmeModel>{
    const url = `${this.baseUrl}/api/filmes/${id}`;
    return this.http.delete<FilmeModel>(url);
  }

  getAllClassificacoes(): Observable<ClassificacaoModel[]>{
    const url = `${this.baseUrl}/api/classificacoes`;
    return this.http.get<ClassificacaoModel[]>(url);
  }

  mensagem(string: String): void{
    this.snackbar.open(`${string}`, 'OK', 
    {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
