import axios from 'axios';
import {vacancyPlotData} from "../__mocks__/vacancy-plot-data-2";
import {salaryPlotData} from "../__mocks__/salary-plot-data";
import {prepareDates, prepareGetParams, preparePostParams} from "../utils/param-service";

export default class ChartService {
    static async getVacancyPlotByTrackId(trackId, dates) {
        dates = prepareDates(dates);

        const data = prepareGetParams(dates);
        const response = await axios.get('http://localhost:8081/api/chart/vacancy-plot/' + trackId + '?' + data);

        return response.data;
    }

    static async getSalaryPlotByTrackId(trackId, dates) {
        return {
            status: 404,
            data: salaryPlotData.find(item => item.trackId === trackId)
        }
    }

    static async getDepartmentPieChartByTrackId() {

    }

    static async getNewVacancyPlotByTrackId() {

    }
}
