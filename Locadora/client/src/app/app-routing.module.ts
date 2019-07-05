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
/*import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';
*/

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
    path: 'clientes-detalhes/:id',
    component: ClienteDetalhesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Detalhes do Cliente' }
  },
  {
    path: 'cliente-cadastro',
    component: ClienteCadastroComponent,
    canActivate: [AuthGuard],
    data: { title: 'Cadastro de Cliente' }
  },
  {
    path: 'cliente-edicao/:id',
    component: ClienteEdicaoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Edição de Cliente' }
  }, 
  {
    path: 'locadoras', 
    component: LocadorasComponent, 
    data: { title: 'Lista de Locadoras' }
  },
  {
    path: 'locadora-detalhes/:id', 
    component: LocadoraDetalhesComponent, 
    data: { title: 'Detalhes de Locadora' }
  },
  {
    path: 'locadora-cadastro', 
    component: LocadoraCadastroComponent, 
    data: { title: 'Cadastro Locadora' }
  },
  {
    path: 'locadora-edicao/:id', 
    component: LocadoraEdicaoComponent, 
    data: { title: 'Edição Locadora' }
  },

  /*{ 
     path: '', 
     redirectTo: '/locadoras', 
     pathMatch: 'full'
  },*/


  /*{ 
    path: 'locacoes', 
    component: LocacoesComponent, 
    data: { title: 'Lista de Locações' }
  },
  { 
    path: 'locacao-detalhes/:id', 
    component: LocacaoDetalhesComponent, 
    data: { title: 'Detalhes Locação' }
  },
  { 
    path: 'locacao-cadastro', 
    component: LocacaoCadastroComponent, 
    data: { title: 'Cadastro Locação' }
  },*/
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { 
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'

  }

  /*{ 
    path: '', 
    redirectTo: '/locacoes', 
    pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
