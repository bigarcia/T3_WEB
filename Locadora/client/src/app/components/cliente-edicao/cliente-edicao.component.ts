import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Locadora } from '../../models/locadora';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-edicao',
  templateUrl: './cliente-edicao.component.html',
  styleUrls: ['./cliente-edicao.component.css']
})
export class ClienteEdicaoComponent implements OnInit {
  clienteForm: FormGroup;
  id_cliente: string = '';
  selected: Locadora = null;
  locadoras: Locadora[];
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  async getData(id_cliente) {
    this.locadoras = await this.api.getLocadoras().toPromise();
    let cliente: Cliente = await this.api.getCliente(id_cliente).toPromise();
    this.id_cliente = cliente.id_cliente;
    this.clienteForm.setValue({
      email: cliente.email_cliente,
      senha: cliente.senha_cliente,
      cpf: cliente.cpf_cliente,
      nome: cliente.nome_cliente,
      telefone: cliente.telefone_cliente,
      sexo: cliente.sexo_cliente,
      data: cliente.data_cliente
    });
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  ngOnInit() {
    this.isLoadingResults = true;
    this.clienteForm = this.formBuilder.group({
      email_cliente: [null, Validators.required],
      senha_cliente: [null, Validators.required],
      cpf_cliente: [1950, Validators.required],
      nome_cliente: [null, Validators.required],
      telefone_cliente: [0.01, Validators.required],
      sexo_cliente: [null, Validators.required],
      data_cliente: [null, Validators.required],
      locadora: [null, Validators.required]
    });
    this.getData(this.route.snapshot.params['id']);
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateCliente(this.id_cliente, form)
      .subscribe(res => {
          let id_cliente = res['id_cliente'];
          this.isLoadingResults = false;
          this.router.navigate(['/cliente-detalhes', id_cliente]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  clienteDetalhes() {
    this.router.navigate(['/cliente-detalhes', this.id_cliente]);
  }
}
