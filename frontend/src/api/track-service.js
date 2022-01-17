import axios from 'axios';
import {tracks} from "../__mocks__/tracks";

export default class TrackService {
    static async remove(id) {
        // const response = await axios.delete()

        const response = {status: 200};

        return response;
    }

    static async getAll() {
        return {
            status: 200,
            data: tracks
        };
    }
}
