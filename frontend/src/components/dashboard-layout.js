import {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import {DashboardNavbar} from './dashboard-navbar';
import {DashboardSidebar} from './dashboard-sidebar';
import useCheckToken from "../hooks/useCheckToken";
import {useRouter} from "next/router";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export const DashboardLayout = (props) => {
    const {children} = props;
    const router = useRouter();
    const [token, setToken] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    // useEffect(() => {
    //     if (token) {
    //         setInterval(async () => {
    //             const isTokenValid = useCheckToken();
    //
    //             if (!isTokenValid) {
    //                 console.log('Invalid token')
    //             }
    //
    //         }, 10000)
    //     }
    // }, [token]);

    // useEffect(() => {
    //
    //     if (localStorage.token) {
    //         setToken(localStorage.token);
    //     }
    // }, [])

    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    );
};
