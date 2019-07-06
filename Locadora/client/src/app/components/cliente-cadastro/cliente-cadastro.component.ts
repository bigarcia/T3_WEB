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
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
      cpf: [null, Validators.required],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      data: [null, Validators.required],
     
    });
    this.getData();
  }

  async getData() {
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCliente(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/cliente-detalhes', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
