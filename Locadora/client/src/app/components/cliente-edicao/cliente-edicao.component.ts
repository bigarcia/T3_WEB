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
  id: string = '';
  selected: Locadora = null;
  locadoras: Locadora[];
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  async getData(id) {
    this.locadoras = await this.api.getLocadoras().toPromise();
    let cliente: Cliente = await this.api.getCliente(id).toPromise();
    this.id = cliente.id;
    this.clienteForm.setValue({
      email: cliente.email,
      senha: cliente.senha,
      cpf: cliente.cpf,
      nome: cliente.nome,
      telefone: cliente.telefone,
      sexo: cliente.sexo,
      data: cliente.data
    });
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  ngOnInit() {
    this.isLoadingResults = true;
    this.clienteForm = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
      cpf: [null, Validators.required],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      sexo: [null, Validators.required],
      data: [null, Validators.required],
      locadora: [null, Validators.required]
    });
    this.getData(this.route.snapshot.params['id']);
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateCliente(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/cliente-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  clienteDetalhes() {
    this.router.navigate(['/cliente-detalhes', this.id]);
  }
}
