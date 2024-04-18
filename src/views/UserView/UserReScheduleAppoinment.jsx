import Footer from '../../components/Footer.jsx'
import NavBar from '../../components/NavBar.jsx'
import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { useNavigate } from "react-router-dom";
import { useInfoAppointment } from '../../hooks/useInfoAppointment.js';
import { getCorreoData } from '../../utils/correo.js';
import { send_email_cancel } from '../../services/email.service.js';
import { cancel_appointment } from '../../services/appointments/appointment.service.js';
import Alerta from '../../components/Alerta.jsx';
import { useEffect } from 'react';
import { useAppointment_ReScheduler } from '../../hooks/useAppointmentScheduler.js';
import RescheduleFormAppointmentUser from '../../components/AppointmentUSER/RescheduleFormUser.jsx';
const input = 'border-secondaryGray border rounded-lg h-10 w-[425px] text-2xl font-light pl-3 pr-3'

const UserReScheduleAppointment = () => {

    // console.log("Schedule")
    const { cita, register, onSubmit, errors, alert, setAlert } = useInfoAppointment()
    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false); // Ocultar la alerta automáticamente después de un tiempo
        }, 3000);
        return () => clearTimeout(timer);
    }, [alert]);

    return (
        <>
            <NavBar />
            <main className='h-screen flex flex-col bg-gradient-to-b from-[#FFFFFF] to-[#EFF0F1]'>
                <div className='flex flex-col justify-center items-center h-full '>
                    {alert && <Alerta severityType="error" />}
                    <section className='flex flex-col items-center'>
                        <div className='flex items-center justify-center w-[700px] mb-6'>
                            <div className={` ${!cita ? "h-3 w-3" : "h-2 w-2"} rounded-full h-2  w-2 bg-primaryGray  mx-1`} />
                            <div className={` ${cita ? "h-3 w-3" : "h-2 w-2"} rounded-full h-2  w-2 bg-primaryGray  mx-1`} />
                        </div>
                        <h1 className='font-bold text-4xl'>Re-Agendación de cita</h1>

                    </section>
                    <form onSubmit={onSubmit}>
                        {
                            !cita ?
                                <div className='flex items-end p-10'>
                                    <div className='flex flex-col  '>
                                        <label className='text-xl'>Buscar cita</label>
                                        <input className={input} placeholder='Ingrese el número de su cita' {...register('id')} />
                                        {
                                            errors.id?.message && <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">{errors.id.message}</p>
                                        }
                                    </div>
                                    <div className={`flex items-center ${errors.id ? 'self-center' : ''}`}>
                                        <button type='submit' >
                                            <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                                        </button>
                                    </div>
                                </div> : ''
                        }
                    </form>

                    {cita ? <RescheduleFormAppointmentUser props={cita.select} />
                        :
                        ''}
                </div >
                <Footer />
            </main >
        </>

    )

}
export default UserReScheduleAppointment 