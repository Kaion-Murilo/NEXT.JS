import axios from "axios";

const api =axios.create(
  {
    baseURL:"https://backendtalentos.herokuapp.com/listuser "
  }
)
export default api;