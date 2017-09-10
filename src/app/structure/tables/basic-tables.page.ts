import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './basic-tables.html'
})

export class TablesBasicTables implements OnInit {
  ngOnInit() {

    $(function () {

      $("[data-toggle=tooltip]").tooltip();

    });

  }
}

