import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './product-details.html'
})

export class EcommerceProductDetails implements OnInit {
  ngOnInit() {

    $(function () {

      // Heart toggle
      $('.cat__ecommerce__catalog__item__like').on('click', function(){
        $(this).toggleClass('cat__ecommerce__catalog__item__like--selected')
      });

      // Active photo toggle
      $('.cat__ecommerce__product__photos-item').on('click', function(){
        $('#targetPhoto').attr('src', $(this).find('img').attr('src'));
        $('.cat__ecommerce__product__photos-item').removeClass('cat__ecommerce__product__photos-item--active');
        $(this).addClass('cat__ecommerce__product__photos-item--active')
      });

      // Tooltip
      $("[data-toggle=tooltip]").tooltip();

      // Select 2
      $('.select2').select2();

    });

  }
}

