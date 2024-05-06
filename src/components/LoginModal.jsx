import Modal from '@mui/material/Modal';
import { useState } from 'react';

export default function LoginModal() {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='flex flex-col w-80 h-auto text-sm leading-5 gap-4 animate-fade-in animate-iteration-count-once absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className="rounded-md p-4 bg-[#FEF2F2]">
                        <div className="flex">
                            <div className="flex-shrink-0 cursor-pointer" onClick={handleClose}>
                                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-[#F87171]">
                                    <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col ml-5">
                                <p className="text-[#991B1B] text-sm leading-5 font-bold">Revisa tus credenciales
                                </p><div class="mt-2 text-[#B91C1C] text-sm leading-5">
                                    <ul class="pl-5 mt-1 list-disc">
                                        <li>Revisa tu email </li>
                                        <li>Revisa tu contraseña </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}