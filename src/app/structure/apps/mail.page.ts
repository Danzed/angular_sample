import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './mail.html'
})

export class AppsMail implements OnInit {
  ngOnInit() {

    $(function() {

      ///////////////////////////////////////////////////
      // SIDEBAR CURRENT STATE
      $('.cat__apps__messaging__tab').on('click', function(){
        $('.cat__apps__messaging__tab').removeClass('cat__apps__messaging__tab--selected');
        $(this).addClass('cat__apps__messaging__tab--selected');
      });

      ///////////////////////////////////////////////////
      // TEXT EDITOR
      $(function() {
        $('.summernote').summernote({
          height: 200
        });
      });

      ///////////////////////////////////////////////////
      // DATATABLES
      $('#example1').DataTable({
        responsive: true,
        "order": [],
        "columnDefs": [ {
          "targets"  : 'no-sort',
          "orderable": false
        }],
        "lengthMenu": [[20, 50, 100, -1], [20, 50, 100, "All"]]
      });

    });

  }
}

