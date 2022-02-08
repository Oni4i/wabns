import {Box, Button, Card, CardContent, Divider, Grid, Typography} from "@mui/material";
import {indigo} from "@mui/material/colors";
import {NotFound} from "../../icons/not-found";

export const TrackItem = ({ track, onRemoveOne }) => {
    return (
        <>
            <Typography
                sx={{ mb: 3 }}
                variant="h4"
            >
                Просмотр отслеживания
            </Typography>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    lg={4}
                    md={6}
                    xs={12}
                >
                    <Card>
                        <CardContent>
                            <Box textAlign='center'>
                                <Typography
                                    sx={{
                                        mb: 3,
                                        textAlign: 'left'
                                    }}
                                    variant="h5"
                                >
                                    Сервис
                                </Typography>
                                { track.logo
                                    ? <Box
                                        component="img"
                                        sx={{
                                            height: 64,
                                            mb: 2,
                                        }}
                                        src={track.logo}
                                    />
                                    : <NotFound fontSize="large" /> }
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        fontSize: '18px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {track.workServiceTitle}
                                </Typography>
                                <Divider
                                    sx={{
                                        mt: 3,
                                        mb: 1
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{
                                        mr: 1
                                    }}
                                    onClick={() => onRemoveOne(track.id)}
                                >
                                    Удалить
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: indigo[500],
                                    }}
                                >
                                    Редактировать
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={6}
                    xs={12}
                >
                    <Card>
                        <CardContent>
                            <Box textAlign='center'>
                                <Typography
                                    sx={{
                                        mb: 3,
                                        textAlign: 'left'
                                    }}
                                    variant="h5"
                                >
                                    Отслеживание
                                </Typography>
                                <Box textAlign='start'>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 1
                                        }}
                                    >
                                        Запуск сбора данных
                                    </Typography>
                                    <Typography>
                                        Единица измерения - {track.delayUnit}
                                    </Typography>
                                    <Typography>
                                        Частота запуска - {track.delayCount}
                                    </Typography>
                                    <Typography>
                                        Последний запуск - {track.lastStart?.date ? (new Date(track.lastStart.date)).toLocaleDateString() : 'X'}
                                    </Typography>
                                    <Typography>
                                        Следующий запуск - {(new Date(track.nextStart.date)).toLocaleDateString()}
                                    </Typography>
                                    <Divider sx={{
                                        my: 2
                                    }}/>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 1
                                        }}
                                    >
                                        Запрос
                                    </Typography>
                                    <Typography>
                                        Ключевые слова - {track.query}
                                    </Typography>
                                    {
                                        Object.keys(track.filters).length > 0 &&
                                        (
                                            <>
                                                <Typography sx={{
                                                    mb: 1
                                                }}>
                                                    Фильтры:
                                                </Typography>
                                                {Object.keys(track.filters).map((name, index) => (
                                                    <Typography key={index}>
                                                        {name} - {track.filters[name]}
                                                    </Typography>
                                                ))}
                                            </>
                                        )
                                    }
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
