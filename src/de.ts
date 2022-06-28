export class De {
    
    // attribut
    private _valeur: number = 0;
    
    // calculator (!)
    constructor () {
        this.valeur = this._valeur;
    }
    
    //encapsulation
    public get valeur(): number {
        return this._valeur;
    }
    public set valeur(value: number) {
        this._valeur = value;
    }

// méthodes
public get_valeur() : number {
    return this.valeur;    
}

public lancer() {
 return this.valeur = (Math.floor(Math.random()* 6) + 1);
}
} 