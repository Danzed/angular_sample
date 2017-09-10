import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './gallery.html'
})

export class AppsGallery implements OnInit {
  ngOnInit() {

    $(function() {

      $('.dropify').dropify();

    });

  }
}

