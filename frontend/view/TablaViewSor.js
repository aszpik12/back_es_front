class TablaViewSor {
  constructor(adat, szuloElem) {
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.torolElem = this.sorElem.children("td").children(".torol");

    this.torolElem.on("click",() => {

        this.dataService.deletetAxisData("api/writer", adat.id);

    })

  }
  #sor() {
    let txt = "";
    txt += `<tr>`;
    for (const key in this.adat) {
      txt += `<td>${adat.id}</td>
        <td>${adat.nev}</td>
        <td>${adat.szul}</td>
        <td><button class="torol">X</td>`;
    }

    txt += `</tr>`;

    this.tablaElem.append(txt);
  }
}
export default TablaViewSor;
