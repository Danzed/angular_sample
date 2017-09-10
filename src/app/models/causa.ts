import { Comentario } from '../models/comentario';
export class Causa {
    constructor(public id:number,
    public id_categoria?:number,
    public nombre_categoria?:string,
    public titulo?:string,
    public descripcion?:string,
    public acepta?:number,
    public rechaza?:number,
    public firmada?:string,
    public comentarios?:Comentario[]){}
    
}
