import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import {DashboardLayout} from "../../components/dashboard-layout";
import { tracks } from "../../__mocks__/tracks";
import {TrackList} from "../../components/track/track-list";


const TrackIndex = () => {
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
                        <TrackList tracks={tracks} />
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