import {DashboardLayout} from "../../components/dashboard-layout";
import Head from "next/head";
import {Box, Container, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {DotPlot} from "../../components/dashboard/dot-plot";
import ChartService from "../../api/chart-service";
import {addDataset, changeLabels, initialChart} from "../../utils/chart-service";
import {DesktopDatePicker} from "@mui/lab";
import TrackService from "../../api/track-service";

const dotColors = [
    'rgb(255, 99, 132)',
    'rgb(53, 162, 235)',
    'rgb(36, 36, 36)',
    'rgb(154,22,219)'
];

const OneDotPlot = () => {

    const [tracks, setTracks] = useState([]);
    const [trackId, setTrackId] = useState(-1);
    const [charts, setCharts] = useState({
        vacancyPlotData: initialChart(),
        salaryPlotData: initialChart()
    })

    const [dates, setDates] = useState({
        from: (() => {
            const date = new Date();
            date.setDate(date.getDate() - 7);

            return date;
        })(),
        to: new Date()
    })

    const onSelectChange = (e) => {
        setTrackId(Number(e.target.value))
    }

    const createDotPlot = async (response, plotKey) => {
        const chart = initialChart();

        if (response.code === 200) {
            changeLabels(chart, response.data.labels);

            let data = [{
                dataLabel: response.data.dataLabel,
                data: response.data.data
            }];

            if (response.data.salaries) {
                data = response.data.salaries
            }

            data.forEach((item, index) => {
                addDataset(chart, {
                    label: item.dataLabel,
                    data: item.data,
                    borderColor: dotColors[index]
                })
            })

            setCharts((items) => {
                return {
                    ...items,
                    [plotKey]: chart
                }
            })
        }
    }

    const changeDate = (date, name) => {
        setDates((prev) => {
            return {
                ...prev,
                [name]: date
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await TrackService.getAll();

            if (response.code === 200) {
                setTracks(response.data);
                setTrackId(response.data.length ? response.data[0].id : -1)
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (trackId === -1) return;

        const fetchData = async () => {
            await createDotPlot(
                await ChartService.getVacancyPlotByTrackId(trackId, dates),
                'vacancyPlotData'
            );
            await createDotPlot(
                await ChartService.getSalaryPlotByTrackId(trackId, dates),
                'salaryPlotData'
            );
        }

        fetchData();
    }, [trackId, dates]);

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
                                {option.id}. {option.workServiceTitle} - {option.query}
                            </option>
                        ))}
                    </TextField>
                    <Box sx={{mt: 5}}>
                        <DesktopDatePicker
                            label="От"
                            inputFormat="yyyy-MM-dd"
                            onChange={(e) => changeDate(e, 'from')}
                            mask="____-__-__"
                            value={dates.from}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                            label="До"
                            inputFormat="yyyy-MM-dd"
                            mask="____-__-__"
                            onChange={(e) => changeDate(e, 'to')}
                            value={dates.to}
                            renderInput={(params) => <TextField {...params} />}
                        />
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
