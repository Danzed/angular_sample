import { Component, OnInit, NgZone } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Login } from '../../models/login';
import { Usuario } from '../../models/usuario';
import { Mensaje } from '../../models/mensaje';

import { LoginService } from '../../service/login/login.service';
declare var $: any;
declare var jQuery: any;
declare var swal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  public login:Login;
  public user:Usuario;

  constructor(public loginService: LoginService, private route:Router) { 
    this.login = new Login("","", false, "lal");
  }
  onSubmit() {
    this.loginService.iniciarSession(this.login)
      .then(usuario => {
        console.log(usuario);
        if(usuario != null){
          localStorage.setItem('users', JSON.stringify(usuario));
          this.route.navigate(['/home']);
        }
        else{
          console.log(this);
          this.login.mensaje = this.loginService.mensaje;
          this.login.isError = true;
          console.log(this);
        }
      });
    console.log("run");
  }
  

  ngOnInit() {
    $(function() {
      // Show/Hide Password
      $('.password').password({
        eyeClass: '',
        eyeOpenClass: 'icmn-eye',
        eyeCloseClass: 'icmn-eye-blocked'
      });

    });
  }
}
