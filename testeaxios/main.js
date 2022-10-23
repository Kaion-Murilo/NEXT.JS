import axios from "axios";

class api{

    static async getaddress(cep){
      const response = await axios.get("http://backendtalentos.herokuapp.com/listuser")
        console.log("response:",response);
    }
}

api.getaddress("44444");