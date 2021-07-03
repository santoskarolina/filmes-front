import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '../models/categoria.model';
import { ClassificacaoModel } from '../models/classificacao.model';
import { FilmeModel } from '../models/filmes.model';
import { CategoriaService } from '../services/categoria.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  selected: '';
  listCategorias: CategoriaModel[] = [];
  listaClassificacoes:  ClassificacaoModel[] = [];

  novoFilme: FilmeModel = {
    titulo: '',
    linkFoto: '',
    dataLancamento : '',
    descricao: '',
    nota: '',
    linkIMDB: '',
    categoria: {
      id: '',
      nome: '',
    },
    classificacao: {
      id: '',
      nome: '',
    }
  }

  constructor(
      private service: ServiceService, 
      private categoria: CategoriaService,
      private router: Router) { }

  ngOnInit(): void {
    this.listarCategorias();
    this.getClassificacoes();
  }

  listarCategorias(): void {
    this.categoria.findAllCategorias().subscribe(
      response => {
        this.listCategorias = response;
      }
    )
  }

  getClassificacoes(): void {
    this.service.getAllClassificacoes().subscribe(
      response => {
        this.listaClassificacoes = response;
      }
    )
  }

  salvar(): void {
    this.service.novoFilme(this.novoFilme).subscribe(
      response => {
        this.service.mensagem("Filme adicionado com sucesso!");
        this.router.navigate(['/filmes']);
      },err => {
        for(let i = 0; i < err.error.messageList.length; i++) {
          this.service.mensagem(err.error.messageList[i].message)
        }
      }
    )
  }

  cancelar():  void {
    this.router.navigate(['/filmes'])
  }
}
