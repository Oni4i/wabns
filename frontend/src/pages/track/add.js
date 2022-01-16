import {DashboardLayout} from "../../components/dashboard-layout";
import Head from "next/head";
import {Box, Card, CardContent, Container, Grid, TextField, Typography} from "@mui/material";
import {TrackForm} from "../../components/track/track-form";

const TrackAdd = () => {

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
                    <TrackForm />
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