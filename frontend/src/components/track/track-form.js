import {Card, CardContent, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {useState} from "react";

const services = [
    {
        value: 'hh',
        label: 'HeadHunter'
    },
];

const units = [
    {
        value: 'day',
        label: 'День'
    },
    {
        value: 'week',
        label: 'Неделя'
    },
    {
        value: 'month',
        label: 'Месяц'
    }
];

export const TrackForm = (props) => {
    const [values, setValues] = useState({
        service: props.service ?? 'hh',
        delay_unit: props.delay_unit ?? 'day',
        delay_count: props.delay_count ?? 1,
        query: props.query ?? '',
        is_active: props.is_active ?? false
    });

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
                                name="service"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.service}
                                variant="outlined"
                            >
                                {services.map((option) => (
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
                            <TextField
                                fullWidth
                                label="Введите частоту запуска"
                                name="delay_count"
                                onChange={handleChange}
                                required
                                value={values.delay_count}
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
                                name="delay_unit"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.delay_unit}
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
                            md={6}
                            xs={12}
                        >

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(e) => setValues({
                                            ...values,
                                            'is_active': e.target.checked
                                        })}
                                        name="is_active"
                                        checked={values.is_active}
                                        inputProps={{ "aria-label": "primary checkbox" }}
                                    />
                                }
                                label="Активный"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    );
}