import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {CButton} from "@/components";

interface CTableProps {
    columns: any;
    rows: any;
}
const CTable = ({
    columns,
    rows,
}:CTableProps) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDetail = (value:any) => {
        console.log('detail ', value)
    }
    const handleChange = (value:any) => {
        console.log('change ', value)
    }
    const handleDelete = (value:any) => {
        console.log('delete ', value)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 550 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column:any, index:number) => (
                                <TableCell
                                    key={index}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        display: !column.hidden ? 'table-cell' : 'none',
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row:any, index:number) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns
                                            .map((column:any, index:number) => {
                                            const value = row[column.id];
                                                console.log('value ', row[column.id])
                                                if (column.id === 'action') {
                                                    return (
                                                        <TableCell
                                                            key={index}
                                                            align={column.align}
                                                            sx={{
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                gap: '1rem',
                                                                display: !column.hidden ? 'flex' : 'none',
                                                            }}
                                                        >
                                                            <CButton
                                                                type={'button'}
                                                                fullWidth
                                                                variant={'outlined'}
                                                                color={'primary'}
                                                                onClick={()=>handleDetail(value)}
                                                                text={'Detail'} />
                                                            <CButton
                                                                type={'button'}
                                                                fullWidth
                                                                variant={'outlined'}
                                                                color={'warning'}
                                                                onClick={()=>handleChange(value)}
                                                                text={'Ubah'} />
                                                            <CButton
                                                                type={'button'}
                                                                fullWidth
                                                                variant={'contained'}
                                                                color={'error'}
                                                                onClick={()=>handleDelete(value)}
                                                                text={'Delete'} />
                                                        </TableCell>
                                                    )
                                                }
                                            return (
                                                <TableCell
                                                    key={index}
                                                    align={column.align}
                                                    style={{
                                                        display: !column.hidden ? 'table-cell' : 'none',
                                                    }}
                                                >
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default CTable;
