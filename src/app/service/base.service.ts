import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  public Component_base:any;
  public URL_API:string;
  public headers:Headers;
  public mensaje:string;
  
  constructor() {
    this.URL_API = "http://ec2-54-88-114-83.compute-1.amazonaws.com/SenadorVirtualBackend/index.php/api/";
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
  }

  GetResponse(response: any): any{
    var obj = response.json();
    console.log("respuesta: "+obj);
    if(obj.codigo === "1")
    {
      console.log("run 1");
      return response.json().respuesta;
    }else{
      this.mensaje = obj.mensaje;
      return null;
    }
    
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
