import {Causa} from "./causa";
import {Pregunta} from "./pregunta";

export class Categoria {
    public id:number;
    public name:string;
    public image:string;
    public created_at:string;
    public causas:[Causa];
    public preguntas:[Pregunta];
}
