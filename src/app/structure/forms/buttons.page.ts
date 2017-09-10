import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var Ladda: any;

@Component({
  selector: 'cat-page',
  templateUrl: './buttons.html'
})

export class FormsButtons implements OnInit {
  ngOnInit() {

    $(function(){
      Ladda.bind( '.ladda-example .ladda-button', { timeout: 2000 } );

      // Bind progress buttons and simulate loading progress
      Ladda.bind( '.ladda-example-progress .ladda-button', {
        callback: function( instance ) {
          var progress = 0;
          var interval = setInterval( function() {
            progress = Math.min( progress + Math.random() * 0.1, 1 );
            instance.setProgress( progress );

            if( progress === 1 ) {
              instance.stop();
              clearInterval( interval );
            }
          }, 200 );
        }
      } );
    });

  }
}

