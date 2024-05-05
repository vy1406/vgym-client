import axios from "axios";

class HttpService {
  //can be done by creating an apiurl using axios.create and giving it a base url.
  // each crud operation will accept an additional parameter that states
  // the endpoint controller
  constructor(apiEndpoint = "/") {
    this.apiurl = process.env.REACT_APP_API_DEV + apiEndpoint;
  }

  get() {
    return axios.get(this.apiurl);
  }

  post(newEntity) {
    return axios.post(this.apiurl, newEntity);
  }

  put(updateEntity) {
    return axios.put(this.apiurl + updateEntity.id, updateEntity);
  }

  delete(id) {
    return axios.delete(this.apiurl + id);
  }
}

export default HttpService;
