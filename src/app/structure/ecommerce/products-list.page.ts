import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'cat-page',
  templateUrl: './products-list.html'
})

export class EcommerceProductsList implements OnInit {
  ngOnInit() {

    $(function () {

      // Datatables
      $('#example1').DataTable({
        "lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
        responsive: true,
        "autoWidth": false
      });

    })

  }
}

