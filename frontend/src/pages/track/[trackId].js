import Head from 'next/head';
import {
    Box,
    CircularProgress,
    Container
} from '@mui/material';
import {DashboardLayout} from "../../components/dashboard-layout";
import {useRouter} from "next/router";
import {tracks} from "../../__mocks__/tracks";
import {useEffect, useState} from "react";
import {TrackItem} from "../../components/track/track-item";

const TrackRead = () => {

    const [content, setContent] = useState(<CircularProgress />);

    const router = useRouter();
    const {trackId} = router.query;

    const track = tracks.find((item) => item.id === Number(trackId));

    useEffect(() => {
        if (track) {
            setContent(<TrackItem track={track} /> )
        }
    }, [track])

    return (
        <>
            <Head>
                <title>
                    Просмотр отслеживания
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
                    {content}
                </Container>
            </Box>
        </>
    );
}

TrackRead.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default TrackRead;