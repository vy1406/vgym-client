import axios from "axios";

class LoginService {

    apiurl = process.env.REACT_APP_API;

    post(user){
        return axios.post(this.apiurl, user)
    }
}

export default LoginService;