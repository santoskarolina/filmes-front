import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { FilmeModel } from '../models/filmes.model';
import { ServiceService } from '../services/service.service';
import { CategoriaModel } from '../models/categoria.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  listaFimes : FilmeModel[] = [];
  listarCategorias:  CategoriaModel[] = [];

  constructor(private service: ServiceService, private categoria: CategoriaService) { }

  ngOnInit(): void {
    this.findAllFiles();
    this.getAllCategorias();
  }

  findAllFiles(): void {
    this.service.findAllFilmes().subscribe(
      response => {
        this.listaFimes = response;
      }
    )
  }

  getAllCategorias(): void {
    this.categoria.findAllCategorias().subscribe(
      response => {
        this.listarCategorias = response;
      }
    )
  }

}
