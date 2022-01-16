import Head from 'next/head';
import {Box, Container, Typography} from '@mui/material';
import {DashboardLayout} from '../../components/dashboard-layout';
import {DashboardChoices} from "../../components/dashboard/dashboard-choices";

const DashboardIndex = () => (
    <>
        <Head>
            <title>
                Данные
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
                    sx={{mb: 3}}
                    variant="h4"
                >
                    Данные
                </Typography>
                <DashboardChoices />
            </Container>
        </Box>
    </>
);

DashboardIndex.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default DashboardIndex;
