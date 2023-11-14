class TablaView{
constructor(lista, szuloElem){

    let kiir = `<table>`;
    for (let i = 0; i < lista.length; i++) {
      kiir += `<tr>
                <td>${lista[i].megj}</td>
                <td>${lista[i].placeholder}</td>
                </tr>`;
    }
    kiir += `</table>`;
    console.log(kiir)
    szuloElem.html(kiir)
  }
}
export default TablaView