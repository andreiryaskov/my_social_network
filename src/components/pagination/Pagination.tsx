// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import {useSelector} from "react-redux";
// import {AppRootStateType} from "../../redux/store";
//
// export default function PaginationRounded() {
//
//     const pagesCount = useSelector<AppRootStateType, number>(state => state.usersPage.totalUsersCount )
//     const pageSize = useSelector<AppRootStateType, number>(state => state.usersPage.pageSize)
//
//     return (
//         <Stack spacing={2}>
//             <Pagination count={Math.ceil(pagesCount / pageSize)} shape="rounded" variant="outlined"/>
//         </Stack>
//     );
// }

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

export type PaginationType = {
    getPaginationCallback: (page: number) => void
}

export default function PaginationControlled({getPaginationCallback}:PaginationType) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        getPaginationCallback(value)
    };

        const pagesCount = useSelector<AppRootStateType, number>(state => state.usersPage.totalUsersCount )
    const pageSize = useSelector<AppRootStateType, number>(state => state.usersPage.pageSize)

    return (
        <Stack spacing={2}>
            <Pagination count={Math.ceil(pagesCount / pageSize)} page={page} onChange={handleChange} />
        </Stack>
    );
}
