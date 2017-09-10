import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CausaService } from '../../../service/causa/causa.service';
import { Usuario } from '../../../models/usuario';
import { Causa } from '../../../models/causa';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-causas',
  templateUrl: './causas.component.html',
  providers: [ CausaService ]
})
export class CausasComponent implements OnInit {
  user:Usuario;
  causas:Causa[] = [];

  constructor(public causaService:CausaService, public route:Router) { 
    this.user = JSON.parse(localStorage.getItem('users')) as Usuario;

    this.causaService.getCausas(this.user.id).then(categorias => {
      console.log(categorias);

      categorias.forEach(element => {
        element.causas.forEach(c => {
          let cau = new Causa(
            c.id,
            c.id_categoria,
            element.name,
            c.titulo,
            c.descripcion,
            c.acepta,
            c.rechaza,
            c.firmada
          );

          this.causas.push(cau);
        })
      });

      $(function(){
        console.log(this.causas, "causas");
        $('#example1').DataTable({
          responsive: true
        });
      });

    });
  }

  ngOnInit() {
    
  }

  toEdit(id)
  {
    this.route.navigate(['/causa/'+id]);
  }

  toComentario(id)
  {
    console.log(id);
    this.route.navigate(['/comentario/'+id]);
  }

}
