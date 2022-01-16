import axios from 'axios';
import {parsedData} from "../../__mocks__/parsed-data";

export default class ParsedDataService {
    static async getAllByLogId(trackLogId) {
        return {
            status: 200,
            data: parsedData.find((data) => data.track_log === trackLogId)
        }
    }

    static async getAllByTrackId(trackId) {
        return {
            status: 200,
            data: parsedData.filter((data) => data.track_Id === trackId) ?? {}
      }
    }
}
