import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const items = [
    {
        title: 'Отслеживание данных',
        subtitle: 'Инструкция по созданию отслеживаний'
    },
    {
        title: 'Чтение данных',
        subtitle: 'Инструкция по эксплуатации инструментов чтения данных'
    },
    {
        title: 'Отслеживание данных',
        subtitle: 'Инструкция по созданию отслеживаний'
    },
    {
        title: 'Отслеживание данных',
        subtitle: 'Инструкция по созданию отслеживаний'
    },
];

const Instruction = () => {
    const [expanded, setExpanded] = useState(-1);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : -1);
    };

    return (
        <>
            <Head>
                <title>
                    Инструкция по эксплуатации
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
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Инструкция
                    </Typography>

                    {items.map((item, index) => (
                        <Accordion
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            key={index}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    {item.subtitle}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.text}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>
        </>
    )
};

Instruction.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Instruction;
