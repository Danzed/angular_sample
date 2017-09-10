import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './form-validation.html'
})

export class FormsFormValidation implements OnInit {
  ngOnInit() {

    $(function(){

      $('#form-validation').validate({
        submit: {
          settings: {
            inputContainer: '.form-group',
            errorListClass: 'form-control-error',
            errorClass: 'has-danger'
          }
        }
      });

      $('#form-validation .remove-error').on('click', function(){
        $('#form-validation').removeError();
      });

      $('#form-validation-simple').validate({
        submit: {
          settings: {
            inputContainer: '.form-group',
            errorListClass: 'form-control-error-list',
            errorClass: 'has-danger'
          }
        }
      });

      $('#form-validation-simple .remove-error').on('click', function(){
        $('#form-validation-simple').removeError();
      });


      $('.select2').select2();
      $('.select2-tags').select2({
        tags: true,
        tokenSeparators: [',', ' ']
      });

    });

  }
}

