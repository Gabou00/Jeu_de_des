
import { De } from "./de";
import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";

const de = new De();
const gobelet = new Gobelet();
const joueur = new Joueur("B");
const joueur1 = new Joueur("Ben");
const joueur2 = new Joueur("Joe");
gobelet.lancer();
gobelet.afficher_score();
console.log(joueur1.get_nom());
console.log(joueur2.get_nom());

