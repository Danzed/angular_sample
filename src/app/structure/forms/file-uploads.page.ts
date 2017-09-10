import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './file-uploads.html'
})

export class FormsFileUploads implements OnInit {
  ngOnInit() {

    $(function() {

      $('.dropify').dropify();

    });

  }
}

