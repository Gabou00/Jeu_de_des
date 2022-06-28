import { De } from "./de";

export class Gobelet {

    // attributs
    private _valeur: number = 0;
    private _des: De[] = [];
    public read = require("readline-sync");
    
    // constructeur
    constructor (){
        this._valeur = 0;
        this._des = [];
        const nb_des = this.read.questionInt("Nombre de des dans un gobelet ? ")
        this.init_de(nb_des);
        // console.log(this._des);
    }
    
    init_de (nb_des : number) {
        for (let index = 0; index < nb_des; index++) { 
            this._des.push(new De());
        }
    }

    // encapsulation
    public get valeur(): number {
        return this._valeur;
    }
    public set valeur(value: number) {
        this._valeur = value;
    }
    
    public get des(): De[] {
        return this._des;
    }
    public set des(value: De[]) {
        this._des = value;
    }

// méthodes
get_valeur() : number {
    return this._valeur;
}

lancer() {
let score = 0;
this._des.forEach((de) => {
    de.lancer();
    score += de.get_valeur();
    console.log(score);    
})
this._valeur = score; 
}

afficher_score() {
    console.log(`Score du dernier lancé de gobelet = ${this._valeur}`);
}

}