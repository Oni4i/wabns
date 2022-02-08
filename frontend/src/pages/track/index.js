import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import {DashboardLayout} from "../../components/dashboard-layout";
import {TrackList} from "../../components/track/track-list";
import {useEffect, useState} from "react";
import TrackService from "../../api/track-service";


const TrackIndex = () => {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await TrackService.getAll();

            if (response.code === 200) {
                setTracks(response.data)
            }
        }

        fetchData();
    }, []);

    const handleRemoveOne = async (id) => {
        const response = await TrackService.remove(id);

        if (response.code === 200) {
            setTracks(tracks => {
                return tracks.filter(track => track.id !== id)
            })
        }
    }

    return (
        <>
            <Head>
                <title>
                    Отслеживание
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Отслеживание
                    </Typography>
                    <Box sx={{ pt: 3 }}>
                        <TrackList
                            tracks={tracks}
                            onRemoveOne={handleRemoveOne}
                        />
                    </Box>
                </Container>
            </Box>
        </>
    );
}

TrackIndex.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default TrackIndex;
