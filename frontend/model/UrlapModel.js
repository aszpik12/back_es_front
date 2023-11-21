import {adatLeiras} from "./adatok.js";

class UrlapModel {
  #adat = [];
  #adatLeiras = {};

  constructor(lista) {
    this.#adat = lista;
    this.#adatLeiras = adatLeiras;
  }
  get adat() {
    return this.#adat;
  }
  get adatLeiras() {
    return this.#adatLeiras;
  }
}
export default UrlapModel;
