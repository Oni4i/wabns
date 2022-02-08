import Head from 'next/head';
import {
    Box,
    CircularProgress,
    Container
} from '@mui/material';
import {DashboardLayout} from "../../components/dashboard-layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {TrackItem} from "../../components/track/track-item";
import TrackService from "../../api/track-service";

const TrackRead = () => {

    const [content, setContent] = useState(<CircularProgress />);
    const [track, setTrack] = useState(null);

    const router = useRouter();
    const {trackId} = router.query;

    const handleRemoveOne = async (id) => {
        const response = await TrackService.remove(id);

        if (response.code === 200) {
            router.push('/track')
        }
    }


    useEffect(() => {

        const fetchData = async () => {
            const response = await TrackService.show(Number(trackId));

            if (response.code === 200) {
                setTrack(response.data);
            }
        }

        fetchData();
    }, [trackId])

    useEffect(() => {
        if (track) {
            setContent(<TrackItem
                track={track}
                onRemoveOne={handleRemoveOne}
            /> )
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
