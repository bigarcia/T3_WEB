import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Locadora } from '../../models/locadora';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  clienteForm: FormGroup;
  locadoras: Locadora[];
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
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
    this.getData();
  }

  async getData() {
    this.locadoras = await this.api.getLocadoras().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCliente(form)
      .subscribe(res => {
        let id_cliente = res['id_cliente'];
        this.isLoadingResults = false;
        this.router.navigate(['/cliente-detalhes', id_cliente]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
