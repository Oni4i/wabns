import {Box, Button, Grid, Typography} from "@mui/material";
import {indigo, red} from "@mui/material/colors";
import NextLink from "next/link";

export const DashboardChoices = () => {
    return (
        <Box sx={{ pt: 3 }}>
            <Grid
                container
                spacing="1"
                sx={{
                    mt: 2
                }}
                alignItems="center"
            >
                <Grid
                    md={4}
                    xs={12}
                >
                    <Typography
                        variant="h6"
                    >
                        Исследование одного отслеживания
                    </Typography>
                </Grid>
                <Grid
                    md={3}
                    xs={12}
                >
                    <NextLink href="/dashboard/one-dot-plot">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: indigo[500],
                            }}
                        >
                            Точечный график
                        </Button>
                    </NextLink>
                </Grid>
                <Grid
                    md={3}
                    xs={12}
                >
                </Grid>
                <Grid
                    sx={{
                        mt: 5
                    }}
                    md={4}
                    xs={12}
                >
                    <Typography
                        variant="h6"
                    >
                        Сравнение нескольких отслеживаний
                    </Typography>
                </Grid>
                <Grid
                    sx={{
                        mt: 5
                    }}
                    md={8}
                    xs={12}
                >
                    <NextLink href="/dashboard/few-dot-plot">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: indigo[500],
                            }}
                        >
                            Точечный график
                        </Button>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    )
}
