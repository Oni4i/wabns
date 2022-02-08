import axios from 'axios';
import {preparePostParams} from "../utils/param-service";

export default class TrackService {
    static async remove(id) {
        const response = await axios.delete('http://localhost:8081/api/track/remove/' + id);

        return response.data;
    }

    static async getAll() {
        const response = await axios.get('http://localhost:8081/api/track');

        return response.data;
    }

    static async show(id) {
        const response = await axios.get('http://localhost:8081/api/track/' + id);

        return response.data;
    }

    static async save(track) {
        const data = preparePostParams(track);

        const response = await axios.post('http://localhost:8081/api/track/add', data)

        return response.data;
    }
}
