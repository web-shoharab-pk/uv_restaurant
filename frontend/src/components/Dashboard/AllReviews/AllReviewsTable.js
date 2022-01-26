import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, TableHead } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import * as React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import axios from 'axios';
import { REVIEW_API } from '../../../apis/apis';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};



const AllReviewsTable = ({ reviews, handleLoadReview }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - reviews.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleReviewDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${REVIEW_API}/delete/${id}`)
                .then((res) => {
                    if(res.data.success) {
                        Swal.fire(
                            'Deleted!',
                            'Review has been deleted.',
                            'success'
                          )
                          handleLoadReview()
                    }
                })
                .catch((err) => {
                    if(err) {
                        toast.error("Some thing is wrong!")
                    }
                })
            }
          })
    }

    return (
        <TableContainer component={Paper}>
            <h3 style={{ textAlign: 'center', padding: '10px' }}>All Reviews</h3>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead style={{ fontWeight: '700' }}>
                    <TableRow style={{ fontWeight: '700' }}>
                        <TableCell style={{ fontWeight: '700' }}>ID</TableCell>
                        <TableCell style={{ fontWeight: '700' }}>Reviewer ID</TableCell>
                        <TableCell style={{ fontWeight: '700' }}>Reviewer Name</TableCell>
                        <TableCell style={{ fontWeight: '700' }} align="right">Review</TableCell>
                        <TableCell style={{ fontWeight: '700' }} align="right">Rate</TableCell>
                        <TableCell style={{ fontWeight: '700' }} align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {(rowsPerPage > 0
                        ? reviews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : reviews
                    ).map((review) => (
                        <TableRow key={review._id}>
                            <TableCell component="th" scope="row">
                                {review._id.slice(0, 10)}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {review.reviewedBy.id.slice(0, 10)}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {review.reviewedBy.name}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {review.text}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {review.rate}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                <Button onClick={() => handleReviewDelete(review._id)} variant="outlined" color="error">
                                    <DeleteForeverOutlinedIcon />
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                style={{ display: 'flex', justifyContent: 'end' }}
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={reviews.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </TableContainer>
    );
}

export default AllReviewsTable;