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
  cliente: Cliente = { id_cliente: '', email_cliente: '', senha_cliente: '', cpf_cliente: '', nome_cliente: null, telefone_cliente: null, sexo_cliente: null, data_cliente: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  async getData(id_cliente) {
    this.cliente = await this.api.getCliente(id_cliente).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id_cliente']);
  }

  deleteCliente(id_cliente) {
    this.isLoadingResults = true;
    this.api.deleteCliente(id_cliente)
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
