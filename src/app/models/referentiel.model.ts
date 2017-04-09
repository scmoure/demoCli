import {Observable} from 'rxjs/Rx';

import { IComparable } from './i.comparable.model';

export class Referentiel implements IComparable {
    id : number;
    libelle : string;
    code : string;

    constructor (id : number, code : string, libelle : string) {
        this.id = id;
        this.code = code;
        this.libelle = libelle;
    }

    public equals(object : any) : boolean {
        return (this.id === object.id)
            && (this.code === object.code)
            && (this.libelle === object.libelle);
    }
}