import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './products-catalog.html'
})

export class EcommerceProductsCatalog implements OnInit {
  ngOnInit() {

    $(function () {

      $('.cat__ecommerce__catalog__item__like').on('click', function(){
        $(this).toggleClass('cat__ecommerce__catalog__item__like--selected')
      });

      $("[data-toggle=tooltip]").tooltip();

    });

  }
}

