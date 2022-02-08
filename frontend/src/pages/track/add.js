import {DashboardLayout} from "../../components/dashboard-layout";
import Head from "next/head";
import {Box, Container, Typography} from "@mui/material";
import {TrackForm} from "../../components/track/track-form";
import {useEffect, useState} from "react";
import WorkService from "../../api/work-service";
import TrackService from "../../api/track-service";

const TrackAdd = () => {

    const [workServices, setWorkServices] = useState([]);

    const saveHandle = async (track) => {
        const response = await TrackService.save(track);

        return response;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await WorkService.getAll();

            if (response.code === 200) {
                setWorkServices(response.data);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            <Head>
                <title>
                    Добавить отслеживание
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
                        Добавить отслеживание
                    </Typography>
                    <TrackForm
                        services={workServices}
                        onSave={saveHandle}
                    />
                </Container>
            </Box>
        </>
    )
}

TrackAdd.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default TrackAdd;
