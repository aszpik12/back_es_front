import TablaView from "./TablaView.js";

class AdatView {
  #lista = [];
  constructor(lista, szuloElem) {
    this.szuloElem = szuloElem;
    this.#lista = lista;
    console.log(this.#lista);
    let tabla = new TablaView(this.#lista, szuloElem);
  }
}
export default AdatView;
