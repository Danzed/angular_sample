import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './icomoon-free.html'
})

export class IconsIcomoonFree implements OnInit {
  ngOnInit() {

    $(function(){

      $('.cat__core__icons-block li').each(function(){
        $(this).tooltip({
          title: $(this).find('i').attr('class')
        });
      })

    })

  }
}

