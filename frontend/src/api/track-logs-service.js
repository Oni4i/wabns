import axios from 'axios';
import {tracksLogs} from "../__mocks__/tracks-logs";

export default class TrackLogsService {
    static async getAllByTrackId(trackId) {
        return {
            response: 200,
            data: tracksLogs.filter((log) => log.track_Id === trackId)
        }
    }
}
