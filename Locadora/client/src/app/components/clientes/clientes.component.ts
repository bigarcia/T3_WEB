import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['id_cliente','email_cliente','cpf_cliente','nome_cliente','telefone_cliente','sexo_cliente','data_cliente'];
  clientes: Cliente[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.clientes = await this.api.getClientes().toPromise();
    console.log(this.clientes);
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

}
