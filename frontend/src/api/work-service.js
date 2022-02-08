import axios from "axios";

export default class WorkService {
    static async getAll() {
        const response = await axios.get('http://localhost:8081/api/work-service');

        return response.data;
    }
}
