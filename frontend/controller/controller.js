import DataService from "../model/DataService.js";

const ALAPVEGPONT = "http://localhost:8000/";
class Controller{
    constructor(){
        this.dataService= new DataService()
        this.dataService.getAxisData("http://localhost:8000/writers", this.megjelenit);
        this.dataService.getAxisData("http://localhost:8000/writers", {
            "nev": "Pistaaaa",
            "szul": 1666
        });
    }

    megjelenit(lista){
        console.log(lista)
        //new AdatView(lista, $('.lista'))
    }
}
export default Controller