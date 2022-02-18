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

  filmeDetalhes : FilmeModel = new FilmeModel()

  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.filmeDetalhes.id = this.active.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.filmeDetalhes.id).subscribe(
      filme => {
        this.filmeDetalhes = filme;
      }, error => {
        this.service.mensagem('Não foi possível retornar o filme')
      })
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
