import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export type PaginationType = {
    getPaginationCallback: (page: number) => void
    pagesCount: number
    pageSize: number

}

export default function PaginationControlled({
                                                 getPaginationCallback,
                                                 pagesCount,
                                                 pageSize
                                             }: PaginationType) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        getPaginationCallback(value)
    };
    return (
        <Stack spacing={2}>
            <Pagination count={Math.ceil(pagesCount / pageSize)} page={page} onChange={handleChange}/>
        </Stack>
    );
}
