import axios from 'axios';

export default class TrackService {
    static async remove(id) {
        const response = await axios.delete('http://localhost:8081/api/track/remove/' + id);

        return response.data;
    }

    static async getAll() {
        const response = await axios.get('http://localhost:8081/api/track');

        return response.data;
    }
}
