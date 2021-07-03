import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { ListarComponent } from './componentes/template/pages/filmes/listar/listar.component';
import {MatCardModule} from '@angular/material/card';
import { NovoComponent } from './componentes/template/pages/filmes/novo/novo.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FilmeIdComponent } from './componentes/template/pages/filmes/filme-id/filme-id.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './componentes/template/pages/home/home.component';
import { EspacoComponent } from './componentes/template/pages/espaco/espaco.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarComponent,
    NovoComponent,
    FilmeIdComponent,
    HomeComponent,
    EspacoComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
