import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from '../../../service/proyecto/proyecto.service';
import { Proyecto } from '../../../models/proyecto';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  providers: [ ProyectoService ]
})
export class ProyectosComponent implements OnInit {
  public proyectos:Proyecto[] = [];
  constructor(public proyectoService:ProyectoService, public route:Router) {
    this.proyectoService.getProyectos().then(proyectos => {
      this.proyectos = proyectos;
        
      $(function(){
        $('#example1').DataTable({
          responsive: true
        });
      });

    });
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
  ngOnInit() {
  }

}
