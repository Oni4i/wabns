import NextLink from 'next/link';
import {Button} from "@mui/material";
import {indigo} from '@mui/material/colors';
import {TrackDataGrid} from "./track-datagrid";

export const TrackList = ({tracks, onRemoveOne}) => {
    return (
        <>
            <NextLink href='/track/add' >
                <Button
                    sx={{
                        backgroundColor: indigo[500],
                        mb: 3
                    }}
                    variant="contained"
                >
                    Добавить
                </Button>
            </NextLink>
            <TrackDataGrid
                rows={tracks}
                onRemoveOne={onRemoveOne}
            />
        </>
    )
}
