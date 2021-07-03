import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaModel } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  
  findAllCategorias(): Observable<CategoriaModel[]>{
    const url = `${this.baseUrl}/api/categorias`;
    return this.http.get<CategoriaModel[]>(url);
  }
}
