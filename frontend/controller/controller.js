import DataService from "../model/DataService.js";
import HibaView from "../view/hibaView.js";
import AdatView from "../view/AdatView.js";
import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";


class Controller {
  constructor() {

    this.urlap();
    this.asszinkronAdatok();

    this.dataService = new DataService();
    console.log('constr');
    this.dataService.getAxisData("api/writer", this.adatokMegj);
  }

  adatokMegj(lista){
    console.log(lista)
    new AdatView(lista, $('.lista'))
  }
  hibaMegj(error){
    console.log(error)
    new HibaView(error, $('.lista'))
}

urlap() {
  const urlapModel = new UrlapModel();
  const urlapView = new UrlapView(urlapModel.adatLeiras, $(".urlap"));
}
feldolgoz(data) {
  console.log(data);
}  
asszinkronAdatok() {
  let adatVegpont = "api/writer";
  this.dataService = new DataService();
  this.dataService.getAxisData(adatVegpont, this.feldolgoz);
}
  
}
export default Controller;
