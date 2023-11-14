class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
  }

  getAxisData(url, callback) {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        callback(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("finally")
      });
  }

  postAxisData(url, data) {
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error)
      })
  }

  putAxisData(url, data) {
    axios
      .put(`${url}/${data.id}`, data)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error)
      })
  }

  deletetAxisData(url, id) {
    axios
      .delete(`${url}/${id}`)
      .then((response) => {
        console.log("RESP", response);
      })
      .catch((error) => {
        console.log("hiba", error)
      })
  }
}
export default DataService;
