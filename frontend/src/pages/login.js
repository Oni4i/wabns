import Head from 'next/head';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Box, Button, Container, Link, TextField, Typography} from '@mui/material';
import useAuth from "../hooks/useAuth";
import {DashboardLayout} from "../components/dashboard-layout";
import Instruction from "./instruction";

const Login = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            password: Yup
                .string()
                .max(255)
                .required(
                    'Password is required')
        }),
        onSubmit: () => {
            const auth = useAuth(formik.values.email, formik.values.password);
        }
    });

    return (
        <>
            <Head>
                <title>Login | Material Kit</title>
            </Head>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{my: 3}}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Авторизация
                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Почта"
                            margin="normal"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Пароль"
                            margin="normal"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                            variant="outlined"
                        />
                        <Box sx={{py: 2}}>
                            <Button
                                color="primary"
                                disabled={formik.isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Войти
                            </Button>
                        </Box>
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Нет аккаунта?
                            {' '}
                            <NextLink
                                href="/register"
                            >
                                <Link
                                    to="/register"
                                    variant="subtitle2"
                                    underline="hover"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Регистрация
                                </Link>
                            </NextLink>
                        </Typography>
                    </form>
                </Container>
            </Box>
        </>
    );
};

Login.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Login;
