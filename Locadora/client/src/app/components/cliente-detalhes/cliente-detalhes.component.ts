import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Locadora } from '../../models/locadora';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {
  cliente: Cliente = { id: '', email: '', senha: '', cpf: '', nome: '', telefone: '', sexo: '', data: '' };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  async getData(id) {
    this.cliente = await this.api.getCliente(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  deleteCliente(id) {
    this.isLoadingResults = true;
    this.api.deleteCliente(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/clientes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
