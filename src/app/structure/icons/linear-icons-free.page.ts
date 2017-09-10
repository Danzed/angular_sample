import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './linear-icons-free.html'
})

export class IconsLinearIconsFree implements OnInit {
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

