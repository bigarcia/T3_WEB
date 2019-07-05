import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';

//import { UserComponent } from './components/user/user.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
/*
import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoEdicaoComponent } from './components/locacao-edicao/locacao-edicao.component';*/
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Authentication } from './models/Authentication';
import {LocadorasComponent} from './components/locadoras/locadoras.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';


@NgModule({
  declarations: [
    AppComponent,
    //UserComponent,
    ClientesComponent,
    ClienteCadastroComponent,
    ClienteDetalhesComponent,
    ClienteEdicaoComponent,
    /*LocacoesCommponent,
    LocacaoCadastroComponent,
    LocacaoDetalhesComponent,
    LocacaoEdicaoComponent,*/
    LoginComponent,
    AlertComponent,
    LocadorasComponent,
    LocadoraCadastroComponent,
    LocadoraDetalhesComponent,
    LocadoraEdicaoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/Locadora/api/login',
          'http://localhost:8080/Locadora/oauth/access_token']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }