import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Locadora } from '../../models/locadora';

@Component({
  selector: 'app-locadoras',
  templateUrl: './locadoras.component.html',
  styleUrls: ['./locadoras.component.css']
})
export class LocadorasComponent implements OnInit {
  displayedColumns: string[] = ['cnpj', 'nome', 'cidade'];
  locadoras: Locadora[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.locadoras = await this.api.getLocadoras().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }


}
