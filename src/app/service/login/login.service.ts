import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseService } from '../base.service';
import { Usuario } from '../../models/usuario';
//declare var swal: any;

import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService extends BaseService {

  constructor(private http: Http) { super(); }

  iniciarSession(login): Promise<Usuario>{
    return this.http.get(this.URL_API+"user/login?mail="+login.email+"&password="+login.contrasena, { headers: this.getHeaders() })
             .toPromise()
             .then(response =>
             {
               var obj = this.GetResponse(response);
               if(obj != null) return obj.usuario as Usuario;
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
