import axios from "axios";
import {preparePostParams} from "../utils/param-service";

export class UserService {
    static async register(data) {

    }

    static async auth(login, password) {
        const data = preparePostParams({email: login, password});

        const response = await axios.post('http://localhost:8081/api/auth/', data);

        return response.data;
    }

    static async checkToken() {
        const response = await axios.post('http://localhost:8081/api/auth/', [], {
            headers: {
                'X-AUTH-TOKEN': localStorage.token
            }
        })

        return response.data;
    }
}
