import NextLink from 'next/link';
import {Button} from "@mui/material";
import {indigo} from '@mui/material/colors';
import {TrackDataGrid} from "./track-datagrid";
import TrackService from "../api/track-service";

export const TrackList = ({tracks}) => {

    const handleRemoveOne = async (id) => {
        return TrackService.remove(id);
    }

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
                onRemoveOne={handleRemoveOne}
            />
        </>
    )
}
