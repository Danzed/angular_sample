import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;

@Component({
  selector: 'cat-page',
  templateUrl: './extras.html'
})

export class FormsExtras implements OnInit {
  ngOnInit() {

    $(function() {

      autosize($('#textarea'));

      $('#password').password({
        eyeClass: '',
        eyeOpenClass: 'icmn-eye',
        eyeCloseClass: 'icmn-eye-blocked'
      });

    });

  }
}

