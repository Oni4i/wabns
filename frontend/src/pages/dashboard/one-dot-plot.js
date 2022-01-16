import {DashboardLayout} from "../../components/dashboard-layout";
import Head from "next/head";
import {Box, Button, Container, TextField} from "@mui/material";
import {tracks} from "../../__mocks__/tracks";
import {useEffect, useMemo, useState} from "react";
import {DotPlot} from "../../components/dashboard/dot-plot";
import ChartService from "../../components/api/chart-service";
import {addDataset, changeLabels, initialChart} from "../../utils/chart-service";
import {vacancyPlotData as tests} from "../../__mocks__/vacancy-plot-data";


const OneDotPlot = () => {

    const [trackId, setTrackId] = useState(Number(tracks[0].id));
    const [charts, setCharts] = useState({
        vacancyPlotData: initialChart(),
        salaryPlotData: initialChart()
    })

    const onSelectChange = (e) => {
        setTrackId(Number(e.target.value))
    }

    const createDotPlot = async (response, plotKey) => {
        const chart = initialChart();

        if (response.status !== 200 || !Object.keys(response.data).length) return chart;

        changeLabels(chart, response.data.labels);

        response.data.datasets.forEach((dataset) => {
            addDataset(chart, dataset);
        })

        setCharts((items) => {
            return {
                ...items,
                [plotKey]: chart
            }
        })

    }

    useEffect(() => {
        const fetchData = async () => {
            await createDotPlot(
                await ChartService.getVacancyPlotByTrackId(trackId),
                'vacancyPlotData'
            );
            await createDotPlot(
                await ChartService.getSalaryPlotByTrackId(trackId),
                'salaryPlotData'
            );
        }

        fetchData();
    }, [trackId]);

    return (
        <>
            <Head>
                <title>
                    Точечный график
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth={false}>
                    <TextField
                        fullWidth
                        label="Выберите отслеживание"
                        onChange={onSelectChange}
                        select
                        SelectProps={{native: true}}
                        value={trackId}
                        variant="outlined"
                    >
                        {tracks.map((option) => (
                            <option
                                key={option.id}
                                value={option.id}
                            >
                                {option.id}. {option.service_title} - {option.query}
                            </option>
                        ))}
                    </TextField>
                    <Box sx={{mt: 5}}>
                        <DotPlot {...charts.vacancyPlotData} title="График количества вакансий"/>
                        <DotPlot {...charts.salaryPlotData} title="График зарплаты"/>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

OneDotPlot.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default OneDotPlot;
