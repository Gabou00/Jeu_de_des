"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
const de_1 = require("./de");
class Gobelet {
    // constructeur
    constructor() {
        // attributs
        this._valeur = 0;
        this._des = [];
        this.read = require("readline-sync");
        this._valeur = 0;
        this._des = [];
        const nb_des = this.read.questionInt("Nombre de des dans un gobelet ? ");
        this.init_de(nb_des);
        // console.log(this._des);
    }
    init_de(nb_des) {
        for (let index = 0; index < nb_des; index++) {
            this._des.push(new de_1.De());
        }
    }
    // encapsulation
    get valeur() {
        return this._valeur;
    }
    set valeur(value) {
        this._valeur = value;
    }
    get des() {
        return this._des;
    }
    set des(value) {
        this._des = value;
    }
    // méthodes
    get_valeur() {
        return this._valeur;
    }
    lancer() {
        let score = 0;
        this._des.forEach((de) => {
            de.lancer();
            score += de.get_valeur();
            console.log(score);
        });
        this._valeur = score;
    }
    afficher_score() {
        console.log(`Score du dernier lancé de gobelet = ${this._valeur}`);
    }
}
exports.Gobelet = Gobelet;
