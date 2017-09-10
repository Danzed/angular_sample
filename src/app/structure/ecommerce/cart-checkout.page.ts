import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './cart-checkout.html'
})

export class EcommerceCartCheckout implements OnInit {
  ngOnInit() {

    $(function() {

      $("#cart-checkout").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: 0,
        autoFocus: true
      });

    });
  
  }
}

