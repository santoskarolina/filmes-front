import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeModel } from '../models/filmes.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-filme-id',
  templateUrl: './filme-id.component.html',
  styleUrls: ['./filme-id.component.css']
})
export class FilmeIdComponent implements OnInit {

  filmeDetalhes : FilmeModel ={
    id: '',
    titulo: '',
    linkFoto : '',
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

  classLivre: String = "Livre";
  class10: String = "10 anos";
  class12: String = "12 anos";
  class16: String = "16 anos";
  class18: String = "18 anos";
  semClassificacao: String = "";

  constructor(private router: Router, private active: ActivatedRoute, 
    private service: ServiceService, private elements: ElementRef) { }

  ngOnInit(): void {
    this.filmeDetalhes.id = this.active.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.filmeDetalhes.id).subscribe(
      response => {
        this.filmeDetalhes = response;
      }
    )
  }

  deletar(): void{
    this.service.delete(this.filmeDetalhes.id).subscribe(
      response => {
        this.service.mensagem( `${this.filmeDetalhes.titulo} deletado com sucesso!`);
        this.router.navigate(['/filmes']);
      }
    )
  }
}
