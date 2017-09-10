import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseService } from '../base.service';
import { Categoria } from '../../models/categoria';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService extends BaseService {

  constructor(private http: Http) { super(); }

  getCategorias(): Promise<Categoria[]>{
    return this.http.get(this.URL_API+"user/categorias", {headers : this.getHeaders()})
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

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
