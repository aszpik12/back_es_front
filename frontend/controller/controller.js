import DataService from "../model/DataService.js";

class Controller {
  constructor() {
    this.dataService = new DataService();

    this.dataService.getAxisData("api/writer", this.megjelenit);
    this.dataService.postAxisData("api/writer", {
      nev: "Pista",
      szul: 1666,
    });
   
    this.dataService.putAxisData("api/writer", {
      id: 1,
      nev: "Gergő",
      szul: 2006,
    });
    this.dataService.deletetAxisData("api/writer", 2);
  }

  megjelenit(lista) {
    console.log(lista);
    //new AdatView(lista, $('.lista'))
  }
  
}
export default Controller;
