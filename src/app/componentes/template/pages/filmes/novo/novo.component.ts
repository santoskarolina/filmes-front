import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '../models/categoria.model';
import { ClassificacaoModel } from '../models/classificacao.model';
import { CategoriaService } from '../services/categoria.service';
import { ServiceService } from '../services/service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  categories: CategoriaModel[] = [];
  classifications:  ClassificacaoModel[] = [];

  form: FormGroup

  constructor(
      private service: ServiceService,
      private categoria: CategoriaService,
      private formBuilder: FormBuilder,
      private router: Router) { }

  ngOnInit(): void {
    this.createForm()
    this.findCategory();
    this.getClassificacoes();
  }

  findCategory(): void {
    this.categoria.findAllCategorias().subscribe(
      response => {
        this.categories = response;
      }
    )
  }

  getClassificacoes(): void {
    this.service.getAllClassificacoes().subscribe(
      response => {
        this.classifications = response;
      }
    )
  }

  save(): void {
    this.service.novoFilme(this.form.value).subscribe(
      response => {
        this.service.mensagem("Filme adicionado com sucesso!");
        this.router.navigate(['/filmes']);
      },error => {
        console.log(error)
          this.service.mensagem('Não foi possível adicionar o filme')
      }
    )
  }

  cancel():  void {
    this.router.navigate(['/filmes'])
  }

  createForm(){
    this.form = this.formBuilder.group({
      titulo: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
      ]),
      linkFoto: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      dataLancamento: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      descricao: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      nota: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      linkIMDB: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      categoria: new FormControl(null, [
        Validators.required,
      ]),
      classificacao: new FormControl(null, [
        Validators.required,
      ])
    })
  }
}
