import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseService } from '../base.service';
import { Proyecto } from '../../models/proyecto';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProyectoService extends BaseService {

  constructor(private http: Http) { super(); }

  getProyectos(): Promise<Proyecto[]>{
    return this.http.get(this.URL_API+"proyectos/proyectos", {headers : this.getHeaders()})
             .toPromise()
             .then(response =>
             {
               console.log(response);
               var obj = this.GetResponse(response);
               if(obj != null) return obj.proyecto as Proyecto[];
               return null;
             })
             .catch(this.handleError);
  }

  private getHeaders(){
    //I included these headers because otherwise FireFox
    //will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
