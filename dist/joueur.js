"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
const gobelet_1 = require("./gobelet");
class Joueur {
    // constructeur
    constructor(nom) {
        // attributs
        this._nom = "";
        this._score = 0;
        this._nom = nom;
        this._score = this.score;
    }
    // encapsulation
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    // méthodes
    get_nom() {
        return this.nom;
    }
    get_score() {
        return this.score;
    }
    jouer() {
    }
    afficher_score() {
        const gobelet = new gobelet_1.Gobelet;
        let score = gobelet.afficher_score();
        return `Le score de ${this._nom} est de ${gobelet.afficher_score()}`;
    }
}
exports.Joueur = Joueur;
