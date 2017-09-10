import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;

@Component({
  selector: 'cat-page',
  templateUrl: './messaging.html'
})

export class AppsMessaging implements OnInit {
  ngOnInit() {

    $(function() {

      ///////////////////////////////////////////////////
      // SIDEBAR CURRENT STATE
      $('.cat__apps__messaging__tab').on('click', function(){
        $('.cat__apps__messaging__tab').removeClass('cat__apps__messaging__tab--selected');
        $(this).addClass('cat__apps__messaging__tab--selected');
      });

      ///////////////////////////////////////////////////////////
      // CUSTOM SCROLL
      if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
        $('.custom-scroll').each(function() {
          $(this).jScrollPane({
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

      ///////////////////////////////////////////////////////////
      // ADJUSTABLE TEXTAREA
      autosize($('.adjustable-textarea'));

    });

  }
}

