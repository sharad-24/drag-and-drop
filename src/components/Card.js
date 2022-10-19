import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

function Card(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState(props.name)
    const [cardDelete, setDelete] = useState(true)

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }
    const dragOver = e => {
        e.stopPropagation();
    }

    function update(event) {
        setName(event.target.value);
    }

    const handleDelete = (e) => {
        setDelete(false)
        console.log(cardDelete)
        setOpen(false)
    }

    return (
        <>
            {cardDelete && (
                <div
                    id={props.id}
                    className={props.className}
                    draggable={props.draggable}
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                >
                    <div className='flex justify-between'>
                        <h1>{name}</h1>
                        <button onClick={handleOpen}><h1 className='text-sky-600'>Edit</h1></button>
                    </div>
                </div>
            )}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='flex justify-between'>
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    defaultValue={name}
                                    onChange={update}
                                />
                                <div className='mt-2'>
                                    <DeleteIcon onClick={handleDelete} />
                                </div>
                            </div>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className='flex justify-end mt-10'>
                                <Button
                                    variant="contained"
                                    onClick={handleClose}>Close</Button>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Card
