import React from "react";
import Dashboard from "@/layouts/Dashboard";
import {useUser} from "@/hooks";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {
    CButton,
    CModalConfirmation,
} from "@/components";

const UsersPage = () => {
    const {
        datas:{
            users,
            isOpen,
        },
        methods:{
            handleOpenModal,
            handleCloseModal,
            handleDeleteUser,
            handleSelectUser,
            handleGetAllUsers,
        }
    } = useUser()

    const columns: GridColDef[] = [
        { field: '_id', headerName: 'ID', width: 150},
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'role', headerName: 'Role', width: 100 },
        { field: 'action', headerName: 'Action', width: 300,
            renderCell: (params: any) => {
                const handleClick = () => {
                    console.log('detail ', params.row._id)
                }
                return (
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem'}}>
                        <CButton
                            type={'button'}
                            fullWidth
                            variant={'outlined'}
                            color={'primary'}
                            onClick={handleClick}
                            text={'Detail'} />
                        <CButton
                            type={'button'}
                            fullWidth
                            variant={'outlined'}
                            color={'warning'}
                            text={'Ubah'} />
                        <CButton
                            type={'button'}
                            fullWidth
                            variant={'contained'}
                            color={'error'}
                            onClick={()=> {
                                handleOpenModal();
                                handleSelectUser(params.row._id)
                            }}
                            text={'Delete'} />
                    </Box>
                )
            }
        },
    ];

    React.useEffect(() => {
        handleGetAllUsers();
    },[users.isSuccess])

    return (
        <Dashboard>
            <h2>Users</h2>
            <CModalConfirmation
                isOpen={isOpen}
                handleClose={handleCloseModal}
                loading={users.isLoading}
                onConfirm={() => {
                    handleDeleteUser(users.selectedUser).then(() => {
                        handleGetAllUsers().then(() => handleCloseModal())
                    })
                }} />
            <DataGrid
                getRowId={(row) => row._id}
                rows={users.data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Dashboard>
    )
}

export default UsersPage;
