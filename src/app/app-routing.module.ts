import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeIdComponent } from './componentes/template/pages/filmes/filme-id/filme-id.component';
import { ListarComponent } from './componentes/template/pages/filmes/listar/listar.component';
import { NovoComponent } from './componentes/template/pages/filmes/novo/novo.component';
import { HomeComponent } from './componentes/template/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmes', component: ListarComponent},
  { path: 'novo-filme', component: NovoComponent},
  { path: 'filme/:id', component: FilmeIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }