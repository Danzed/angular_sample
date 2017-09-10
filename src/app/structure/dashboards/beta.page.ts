import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;

@Component({
  selector: 'cat-page',
  templateUrl: './beta.html'
})

export class DashboardsBeta implements OnInit {
  ngOnInit() {

    $( function() {

      ///////////////////////////////////////////////////////////
      // tooltips
      $("[data-toggle=tooltip]").tooltip();

      ///////////////////////////////////////////////////////////
      // chart1
      new Chartist.Line(".chart-line", {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        series: [
          [5, 0, 7, 8, 12],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      }, {
        fullWidth: !0,
        chartPadding: {
          right: 40
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });

      ///////////////////////////////////////////////////////////
      // chart 2
      var overlappingData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
          ]
        },
        overlappingOptions = {
          seriesBarDistance: 10,
          plugins: [
            Chartist.plugins.tooltip()
          ]
        },
        overlappingResponsiveOptions = [
          ["", {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0]
              }
            }
          }]
        ];

      new Chartist.Bar(".chart-overlapping-bar", overlappingData, overlappingOptions, overlappingResponsiveOptions);

      ///////////////////////////////////////////////////////////
      // custom scroll
      if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
        $('.custom-scroll').each(function() {
          $(this).jScrollPane({
            contentWidth: '100%',
            autoReinitialise: true,
            autoReinitialiseDelay: 100
          });
          var api = $(this).data('jsp'),
            throttleTimeout;
          $(window).bind('resize', function() {
            if (!throttleTimeout) {
              throttleTimeout = setTimeout(function() {
                api.reinitialise();
                throttleTimeout = null;
              }, 50);
            }
          });
        });
      }

    } );

  }
}


