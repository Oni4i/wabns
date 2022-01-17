import axios from 'axios';
import {vacancyPlotData} from "../__mocks__/vacancy-plot-data-2";
import {salaryPlotData} from "../__mocks__/salary-plot-data";

export default class ChartService {
    static async getVacancyPlotByTrackId(trackId, dates) {
        return {
            status: 200,
            data: vacancyPlotData.find(item => item.trackId === trackId)
        }
    }

    static async getSalaryPlotByTrackId(trackId, dates) {
        return {
            status: 200,
            data: salaryPlotData.find(item => item.trackId === trackId)
        }
    }

    static async getDepartmentPieChartByTrackId() {

    }

    static async getNewVacancyPlotByTrackId() {

    }
}
