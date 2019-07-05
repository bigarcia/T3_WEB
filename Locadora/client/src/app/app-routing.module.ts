import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth-guard';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Lista de Clientes' }
  },
  {
    path: 'cliente-detalhes/:id',
    component: ClienteDetalhesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Detalhes de Cliente' }
  },
  {
    path: 'cliente-cadastro',
    component: ClienteCadastroComponent,
    canActivate: [AuthGuard],
    data: { title: 'Cadastro Cliente' }
  },
  {
    path: 'cliente-edicao/:id',
    component: ClienteEdicaoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Edição Cliente' }
  },
{
    path: 'locadoras',
    component: LocadorasComponent,
    canActivate: [AuthGuard],
    data: { title: 'Lista de Locadoras' }
  },
  {
    path: 'locadora-detalhes/:id',
    component: LocadoraDetalhesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Detalhes de Locadora' }
  },
  {
    path: 'locadora-cadastro',
    component: LocadoraCadastroComponent,
    canActivate: [AuthGuard],
    data: { title: 'Cadastro Locadora' }
  },
  {
    path: 'locadora-edicao/:id',
    component: LocadoraEdicaoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Edição Locadora' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
