import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './datatables.html'
})

export class TablesDataTables implements OnInit {
  ngOnInit() {

    $(function(){

      $('#example1').DataTable({
        responsive: true
      });

      $('#example2').DataTable({
        autoWidth: true,
        scrollX: true,
        fixedColumns: true
      });

      $('#example3').DataTable({
        autoWidth: true,
        scrollX: true,
        fixedColumns: true
      });
    });

  }
}

