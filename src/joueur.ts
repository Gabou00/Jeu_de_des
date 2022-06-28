import { Gobelet } from "./gobelet";

export class Joueur {

    // attributs
    private _nom: string = "";
    private _score: number = 0;
    
    // constructeur
    constructor (nom : string) {
        this._nom = nom;
        this._score = this.score;
    }
    
    // encapsulation
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    
    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }

// méthodes
public get_nom() : string {
    return this.nom;
} 

public get_score() {
    return this.score;
}

public jouer() {

}

public afficher_score() {
    const gobelet = new Gobelet;
    let score = gobelet.afficher_score(); 
    return `Le score de ${this._nom} est de ${gobelet.afficher_score()}`
}

}

