import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseService } from '../base.service';
import { Categoria } from '../../models/categoria';
import { Causa } from '../../models/causa';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class CausaService extends BaseService {

  constructor(private http: Http) { super(); }

  getCausas(id): Promise<Categoria[]>{
    return this.http.get(this.URL_API+"causa/causas?id_user="+id, {headers : this.getHeaders()})
             .toPromise()
             .then(response =>
             {
               console.log(response);
               var obj = this.GetResponse(response);
               if(obj != null) return obj.categorias as Categoria[];
               return null;
             })
             .catch(this.handleError);
  }

  getDetalle(id_causa, id)
  {
    return this.http.get(this.URL_API+"causa/causa?id_causa="+id_causa+"&id_user="+id, {headers : this.getHeaders()})
             .toPromise()
             .then(response =>
             {
               console.log(response);
               var obj = this.GetResponse(response);
               if(obj != null) return obj.causa as Causa;
               return null;
             })
             .catch(this.handleError);
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
