import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
// import { LivroEdicaoComponent } from './components/livro-edicao/livro-edicao.component';
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
  /* {
    path: 'livro-edicao/:id',
    component: LivroEdicaoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Edição Livro' }
  }, */
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
