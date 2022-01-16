import {DashboardLayout} from "../../components/dashboard-layout";
import Head from "next/head";
import {
    Avatar,
    Box,
    CircularProgress,
    Container,
    Grid,
    IconButton, List, ListItem,
    ListItemAvatar, ListItemText,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {DotPlot} from "../../components/dashboard/dot-plot";
import AddchartIcon from '@mui/icons-material/Addchart';
import DeleteIcon from '@mui/icons-material/Delete';
import TrackService from "../../components/api/track-service";
import BarChartIcon from '@mui/icons-material/BarChart';
import { indigo } from '@mui/material/colors';
import {addDataset, changeLabels, initialChart, removeDataset} from "../../utils/chart-service";
import ChartService from "../../components/api/chart-service";
import {DesktopDatePicker} from "@mui/lab";

const FewDotPlot = () => {

    const [tracks, setTracks] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState([]);
    const [selectedTrack, setSelectedTrack] = useState(-1);
    const [charts, setCharts] = useState(initialChart());

    const [dates, setDates] = useState({
        from: (() => {
            const date = new Date();
            date.setDate(date.getDate() - 7);

            return date;
        })(),
        to: new Date()
    })

    const updateTracks = async () => {
        const response = await TrackService.getAll();

        if (response.status === 200) {
            setTracks(response.data);
            setSelectedTrack(response.data.length ? response.data[0].id : -1)
        }
    }

    const addChart = async (trackId) => {
        const response = await ChartService.getVacancyPlotByTrackId(trackId, dates);

        if (response.status !== 200 || response.data.length === 0) return;

        const chart = Object.assign({}, charts);
        changeLabels(chart, response.data.labels)

        response.data.datasets.forEach((dataset) => {
            addDataset(chart, Object.assign(dataset, {trackId}));
        })

        setCharts(chart);
    }

    const removeChart = async (trackId) => {
        const chart = Object.assign({}, charts);

        removeDataset(chart, (item) => {
            return item.trackId !== trackId;
        });

        setCharts(chart)
    }

    const addTrack = () => {
        if (!selectedTrack || selectedTracks.indexOf(selectedTrack) !== -1) return;

        setSelectedTracks([
            ...selectedTracks,
            selectedTrack
        ]);

        addChart(selectedTrack);
    }

    const removeTrack = (e) => {
        const track = Number(e.currentTarget.dataset.track);

        if (selectedTracks.indexOf(track) === -1) return;

        setSelectedTracks([
            ...selectedTracks.filter(item => item !== track)
        ]);

        removeChart(track);
    }

    const selectTrackHandle = (e) => {
        setSelectedTrack(Number(e.target.value))
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
        updateTracks();
    }, []);

    useEffect(() => {
        selectedTracks.forEach((trackId) => {
            addChart(trackId);
        });
    }, [dates])

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
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                    >
                        <Grid
                            item
                            md={5}
                            xs={10}
                        >
                            {
                                tracks.length
                                    ? <TextField
                                        fullWidth
                                        label="Выберите отслеживание"
                                        select
                                        onChange={selectTrackHandle}
                                        SelectProps={{native: true}}
                                        value={selectedTrack}
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
                                    : <CircularProgress />
                            }
                        </Grid>
                        <Grid
                            item
                            md={2}
                            xs={2}
                        >
                            <IconButton onClick={addTrack}>
                                <AddchartIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    {selectedTracks.length > 0 &&
                        <Grid item xs={12} md={4}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Отслеживания для сравнения
                            </Typography>
                            <List>
                                {
                                    selectedTracks.map((val) => {
                                        const track = tracks.find((item) => item.id === val)
                                        return (
                                            <ListItem
                                                key={track.id}
                                                secondaryAction={
                                                    <IconButton
                                                        edge="end"
                                                        aria-label="delete"
                                                        onClick={removeTrack}
                                                        data-track={val}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar
                                                        sx={{
                                                            backgroundColor: 'white'
                                                        }}
                                                    >
                                                        <BarChartIcon
                                                            sx={{
                                                                color: indigo[500],
                                                                fontSize: 40
                                                            }}
                                                        />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={(
                                                        <Typography>
                                                            {track.id}. {track.service_title} - {track.query}
                                                        </Typography>
                                                    )}
                                                />
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Grid>
                    }
                    <Box sx={{mt: 5}}>
                        <DesktopDatePicker
                            label="От"
                            inputFormat="yyyy-MM-dd"
                            onChange={(e) => changeDate(e, 'from')}
                            value={dates.from}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                            label="До"
                            inputFormat="yyyy-MM-dd"
                            onChange={(e) => changeDate(e, 'to')}
                            value={dates.to}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DotPlot {...charts} title="График количества вакансий"/>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

FewDotPlot.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default FewDotPlot;
