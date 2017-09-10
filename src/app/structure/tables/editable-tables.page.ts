import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './editable-tables.html'
})

export class TablesEditableTables implements OnInit {
  ngOnInit() {

    $(function(){

      $('#example1').editableTableWidget();
      $('#example2').editableTableWidget();

    })

  }
}

