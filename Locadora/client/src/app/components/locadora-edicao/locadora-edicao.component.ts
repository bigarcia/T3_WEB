import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Locadora } from 'src/app/models/locadora';

@Component({
  selector: 'app-locadora-edicao',
  templateUrl: './locadora-edicao.component.html',
  styleUrls: ['./locadora-edicao.component.css']
})
export class LocadoraEdicaoComponent implements OnInit {

  locadoraForm: FormGroup;
  id: string = '';
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  

  

  async getData(id) {
    
    let locadora: Locadora = await this.api.getLocadora(id).toPromise();
    this.id = locadora.id;
    this.locadoraForm.setValue({
      cnpj: locadora.cnpj,
      nome: locadora.nome,
      cidade: locadora.cidade,

    });
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  ngOnInit() {
    this.isLoadingResults = true;
    this.locadoraForm = this.formBuilder.group({
      cnpj: [null, Validators.required],
      nome: [null, Validators.required],
      cidade: [null, Validators.required],
    });
    this.getData(this.route.snapshot.params['id']);
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateLocadora(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/locadora-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  locadoraDetalhes() {
    this.router.navigate(['/locadora-detalhes', this.id]);
  }
  

}
