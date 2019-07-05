import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Locadora } from '../../models/locadora';


@Component({
  selector: 'app-locadora-detalhes',
  templateUrl: './locadora-detalhes.component.html',
  styleUrls: ['./locadora-detalhes.component.css']
})
export class LocadoraDetalhesComponent implements OnInit {
  locadora: Locadora = { id: '', email: '', senha: '', cnpj: '', nome: '', cidade: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  async getData(id) {
    this.locadora = await this.api.getLocadora(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  deleteLocadora(id) {
    this.isLoadingResults = true;
    this.api.deleteLocadora(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/locadoras']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }


}
