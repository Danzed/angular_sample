import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'cat-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  public usr:Usuario;
  public nombre:string;
  constructor(){
    this.nombre = "lala";
  }

  ngOnInit() {
    this.usr = JSON.parse(localStorage.getItem("users")) as Usuario;
    //this.nombre = usr.firs_name;
    this.nombre = this.usr.firs_name;
    console.log(this.usr, "top");
  }
}
