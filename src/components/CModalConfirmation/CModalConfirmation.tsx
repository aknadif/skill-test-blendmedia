import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LoadingButton from '@mui/lab/LoadingButton';
import Fade from '@mui/material/Fade';
import {CButton, CTypography} from "@/components";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    py: 2,
    px: 4
};

interface CModalConfirmationProps {
    type?: 'delete' | 'update' | 'create';
    isOpen?: boolean;
    handleClose?: () => void;
    onConfirm?: () => void;
    loading?: boolean;
}

const CModalConfirmation = ({
    isOpen = false,
    loading = false,
    onConfirm = () => {},
    handleClose = () => {}
}: CModalConfirmationProps) => {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <Box sx={style}>
                        <CTypography
                            variant={'h6'}
                            text={'Delete Data'}
                            sx={{
                                color: 'red',
                                mb: 4
                            }}
                        />
                        <CTypography
                            variant={'body1'}
                            text={'Are you sure you want to delete this data?'}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                mt: 4,
                                gap: 2
                            }}
                        >
                            <CButton
                                type={'button'}
                                fullWidth={false}
                                variant={'contained'}
                                text={'Back'}
                                onClick={handleClose}
                                color={'primary'}
                            />
                            {loading ? (
                                <LoadingButton
                                    loading={loading}
                                    variant="outlined"
                                    disabled
                                >
                                </LoadingButton>
                                ) : (
                                <CButton
                                    type={'button'}
                                    fullWidth={false}
                                    variant={'contained'}
                                    text={'Delete'}
                                    onClick={onConfirm}
                                    color={'error'}
                                />
                            )}
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default CModalConfirmation;
