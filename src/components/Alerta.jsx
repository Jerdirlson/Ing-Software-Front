import { Collapse, Alert, AlertTitle, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useInfoAppointment } from "../hooks/useInfoAppointment";

const Alerta = ({ severityType }) => {
    const [open, setOpen] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setAlert(false)
    //         setOpen(false);
    //     }, 5000);

    //     return () => clearTimeout(timer);
    // }, [alert]);

    useEffect(() => {
        setOpen(true); 
    }, []);

    return (
        <Collapse in={open}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error Alert with a scary title.
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
