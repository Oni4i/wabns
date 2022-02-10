import {Button, Card, CardContent, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {indigo} from "@mui/material/colors";
import {useRouter} from "next/router";

const units = [
    {
        value: '1',
        label: 'День'
    },
    {
        value: '2',
        label: 'Неделя'
    },
    {
        value: '3',
        label: 'Месяц'
    }
];

export const TrackForm = ({services, onSave, ...props}) => {
    const [values, setValues] = useState({
        workService: props.workService ?? -1,
        delayUnit: props.delayUnit ?? 1,
        delayCount: props.delayCount ?? 1,
        query: props.query ?? '',
        isActive: props.isActive ?? false
    });

    const [workServices, setWorkServices] = useState([]);

    const router = useRouter();

    const saveHandle = async () => {
        const response = await onSave(values);

        if (response.code === 200) {
            router.push('/track')
        }
    }

    useEffect(() => {
        setWorkServices(services);
        setValues({
            ...values,
            workService: services.length ? services[0].id : -1
        })
    }, [services])

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form
            autoComplete="off"
            noValidate
            {...props}
        >
            <Card>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={4}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Ключевые слова"
                                name="query"
                                onChange={handleChange}
                                required
                                value={values.query}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Выберите сервис"
                                name="workService"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.workService}
                                variant="outlined"
                            >
                                {workServices.map((option) => (
                                    <option
                                        key={option.id}
                                        value={option.id}
                                    >
                                        {option.title}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Введите частоту запуска"
                                name="delayCount"
                                onChange={handleChange}
                                required
                                value={values.delayCount}
                                variant="outlined"
                                type="number"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Выберите единицу измерения"
                                name="delayUnit"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.delayUnit}
                                variant="outlined"
                            >
                                {units.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(e) => setValues({
                                            ...values,
                                            'isActive': e.target.checked
                                        })}
                                        name="isActive"
                                        checked={values.isActive}
                                        inputProps={{ "aria-label": "primary checkbox" }}
                                    />
                                }
                                label="Активный"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: indigo[500],
                                }}
                                onClick={saveHandle}
                            >
                                Сохранить
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
}
