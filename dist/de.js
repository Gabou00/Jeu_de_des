"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.De = void 0;
class De {
    // calculator (!)
    constructor() {
        // attribut
        this._valeur = 0;
        this.valeur = this._valeur;
    }
    //encapsulation
    get valeur() {
        return this._valeur;
    }
    set valeur(value) {
        this._valeur = value;
    }
    // méthodes
    get_valeur() {
        return this.valeur;
    }
    lancer() {
        return this.valeur = (Math.floor(Math.random() * 6) + 1);
    }
}
exports.De = De;
