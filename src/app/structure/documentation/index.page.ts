import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './index.html'
})

export class DocumentationIndex implements OnInit {
  ngOnInit() {

    $(function () {

      // scroll to chapter
      $('.scroll-to-chapter a').on('click', function(e){

        e.preventDefault();

        var id = $(this).attr('href'),
          offset = $(id).offset().top - 85;

        $('body, html').stop().animate({'scrollTop': offset}, 500);

      });


      // back to top
      $('.back-to-top').on('click', function(e){

        e.preventDefault();

        $('body, html').stop().animate({'scrollTop': 0}, 500);

      });

      // scroll table of contest
      var tableEl = $('.table-of-contents'),
        tableOffset = tableEl.offset().top,
        windowEl = $(window),
        contentEl = $('.cat__content'),
        contentOffset = contentEl.offset().top;

      windowEl.on('scroll', function(){
        if (windowEl.width() >= 991) {
          var windowTop = windowEl.scrollTop();

          if (windowTop > tableOffset) {
            if (windowTop < contentEl.height() - tableEl.height() - tableOffset - contentOffset - 20 - 200) {
              tableEl.css('transform', 'translate3d(0px, ' + (windowTop - tableOffset + contentOffset + 20) + 'px, 0px)');
            }
          } else {
            tableEl.css('transform', 'translate3d(0px, 0px, 0px)');
          }
        }
      });

      windowEl.on('resize', function(){
        if (windowEl < 991) {
          tableEl.css('transform', 'translate3d(0px, 0px, 0px)');
        }
      });

    });

  }
}

