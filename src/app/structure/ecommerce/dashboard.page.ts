import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var Chartist: any;

@Component({
  selector: 'cat-page',
  templateUrl: './dashboard.html'
})

export class EcommerceDashboard implements OnInit {
  ngOnInit() {

    $(function () {

      // AREA
      var chart1 = new Chartist.Line(".chart-area-1", {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
          [2, 4, 7, 25, 5, 28, 31]
        ]
      }, {
        fullWidth: !0,
        chartPadding: {
          right: 15,
          left: -15
        },
        low: 0,
        showArea: true,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });

      var chart2 = new Chartist.Line(".chart-area-2", {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
          [3, 10, 65, 23, 81, 17, 3]
        ]
      }, {
        fullWidth: !0,
        chartPadding: {
          right: 15,
          left: -15
        },
        low: 0,
        showArea: true,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });

      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        chart1.update();
        chart2.update();
      });

      // Datatables
      $('#example1, #example2, #example3, #example4').DataTable({
        responsive: true,
        "autoWidth": false,
        "columnDefs": [
          { "width": "25%", "targets": 3 }
        ]
      });

    })

  }
}

