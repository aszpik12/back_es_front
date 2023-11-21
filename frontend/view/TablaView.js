import DataService from "../model/DataService.js";

class TablaView {
  constructor(lista, szuloElem) {
    szuloElem.append(`<table class="table">`);
    this.tablaElem = szuloElem.children("table");

    let kiir = "";
    for (let i = 0; i < lista.length; i++) {
      const elem = this.lista[i];
      new TablaViewSor(elem, this.tablaElem);
    }
  }
}
export default TablaView;
