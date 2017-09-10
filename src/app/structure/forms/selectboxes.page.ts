import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './selectboxes.html'
})

export class FormsSelectboxes implements OnInit {
  ngOnInit() {

    $(function(){

      $('.select2').select2();
      $('.select2-tags').select2({
        tags: true,
        tokenSeparators: [',', ' ']
      });

      $('.selectpicker').selectpicker();

    })

  }
}

