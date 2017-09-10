import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CausaService } from '../../../service/causa/causa.service';
import { Usuario } from '../../../models/usuario';
import { Causa } from '../../../models/causa';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
