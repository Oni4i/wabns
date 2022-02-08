import {DataGrid} from "@mui/x-data-grid";
import LoadingButton from "@mui/lab/LoadingButton";
import NextLink from "next/link";
import {Button} from "@mui/material";
import {useState} from "react";


export const TrackDataGrid = ({rows, onRemoveOne}) => {

    const [loadingButtons, setLoadingButtons] = useState([]);

    const handleRemoveOne = async (e, id) => {
        setLoadingButtons([...loadingButtons, id]);

        await onRemoveOne(id);

        setLoadingButtons((ids) => ids.filter((value) => value !== id))
    }

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={
                    [
                        {
                            field: 'logo',
                            headerName: '',
                            type: 'image',
                            width: 80,
                            renderCell: (params) => (
                                <img
                                    src={params.value}
                                    style={{height: '40px'}}
                                    alt="logo"
                                />
                            ),
                            align: 'center',
                            sortable: false
                        },
                        {
                            field: 'service_title',
                            headerName: 'Сервис',
                            type: 'string',
                            width: 140,
                            align: 'center'
                        },
                        {
                            field: 'query',
                            headerName: 'Поисковой запрос',
                            description: 'This column has a value getter and is not sortable.',
                            width: 160,
                            align: 'center'
                        },
                        {
                            field: 'isActive',
                            type: 'boolean',
                            headerName: 'Активен',
                            description: 'This column has a value getter and is not sortable.',
                            width: 120,
                            align: 'center'
                        },
                        {
                            field: 'lastStart',
                            headerName: 'Последний запуск',
                            type: 'dateTime',
                            width: 200,
                            align: 'center',
                            valueGetter: ({ value }) => value && value.date && new Date(value.date),
                        },
                        {
                            field: 'nextStart',
                            headerName: 'Следующий запуск',
                            type: 'dateTime',
                            width: 200,
                            align: 'center',
                            valueGetter: ({ value }) => value && value.date && new Date(value.date),
                        },
                        {
                            field: 'actions',
                            type: 'actions',
                            headerName: '',
                            width: 200,
                            align: 'center',
                            renderCell: ({id}) => {
                                return (
                                    <>
                                        <LoadingButton
                                            color="error"
                                            variant="contained"
                                            sx={{
                                                mr: 1
                                            }}
                                            onClick={(e) => handleRemoveOne(e, id)}
                                            loading={loadingButtons.indexOf(id) !== -1}
                                        >
                                            Удалить
                                        </LoadingButton>
                                        <NextLink
                                            href='/track/[trackId]'
                                            as={`/track/${id}`}
                                            passHref
                                        >
                                            <Button
                                                color="secondary"
                                                variant="contained"
                                            >
                                                Просмотр
                                            </Button>
                                        </NextLink>
                                    </>
                                )
                            }
                        }
                    ]
                }
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
