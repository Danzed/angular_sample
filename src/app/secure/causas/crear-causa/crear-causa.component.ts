import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../service/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-crear-causa',
  templateUrl: './crear-causa.component.html',
  providers: [ CategoriaService ]
})
export class CrearCausaComponent implements OnInit {
  public titulo_pagina:string = "Crear causa";
  public categorias:Categoria[];
  public selectedValue:Categoria;

  constructor(public categoriaService:CategoriaService) {
    
   }

  ngOnInit() {
    this.categoriaService.getCategorias().then(categorias => {
      this.categorias = categorias;
      console.log(this.categorias, "con");
    });

    $(function() {
      $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        labels: {
          finish: "Enviar",
          next: "Siguiente",
          previous: "Volver",
          loading: "Cargando ..."
        },
        enableKeyNavigation:false
      });

      $("#example-icons").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        onStepChanging: function (event, currentIndex, newIndex) {  console.log(currentIndex, newIndex, "changing"); return true; },
        onStepChanged: function (event, currentIndex, priorIndex) { console.log(currentIndex, priorIndex, "changed") }, 
      });

      $('.dropify').dropify({
        messages: {
            'default': 'Arrastra y suelta tu imagen o da click',
            'replace': 'arrastra una nueva imagen o da click en remover',
            'remove':  'Remover',
            'error':   'Ooops!'
        }
      });
    });
  }

}
