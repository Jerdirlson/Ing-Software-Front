import { Collapse, Alert, AlertTitle, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Alerta = ({ info }) => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        setOpen(true);
    }, []);


    return (
        <Collapse in={open}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {info}
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            </Alert>
        </Collapse>

    );
};

export default Alerta;
