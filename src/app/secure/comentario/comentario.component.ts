import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { CausaService } from '../../service/causa/causa.service';
import { Usuario } from '../../models/usuario';
import { Causa } from '../../models/causa';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  providers: [ CausaService ]
})
export class ComentarioComponent implements OnInit {
  public user:Usuario;
  public causa:Causa;
  constructor(public causaService:CausaService, private route: ActivatedRoute) {
    this.user = JSON.parse(localStorage.getItem('users')) as Usuario;
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.causaService.getDetalle(+params['id'], this.user.id))
    .subscribe(causa => {
      this.causa = causa;
      console.log(this.causa);
    });

  }

}
