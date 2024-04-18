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
const input = 'border-secondaryGray border rounded-lg h-10 w-[425px] text-2xl font-light pl-3 pr-3'

const UserCancelAppointment = () => {

    // console.log("Schedule")
    const { cita, register, onSubmit, errors, alert, setAlert } = useInfoAppointment()
    const navigate = useNavigate()
    const onClick = async (data) => {
        // Logica de obtencion de fecha & data to send => correo
        const correoData = getCorreoData(cita)
        //---------------------------------------
        console.log(data)
        console.log(correoData)
        //Llamadas fetch
        try {
            const response = await cancel_appointment(data)
            console.log(response)
            if (response) {
                send_email_cancel(correoData)
            }
        } catch (error) {
            console.log('error', error)

        } finally {
            navigate('/citas')
        }
    }
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
                        <h1 className='font-bold text-4xl'>Cancelación de cita</h1>

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
                                    <div className={`flex items-center ${errors.id ? 'self-center': ''}`}>
                                        <button type='submit'>
                                            <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                                        </button>
                                    </div>
                                </div> : ''
                        }
                    </form>

                    {cita ?
                        <>
                            < article className='h-auto w-[700px] bg-white rounded-[40px] shadow-bigShadow p-10 mt-12'>
                                <div className="flex text-2xl mb-4">
                                    <h3 className="font-light pr-8">
                                        Paciente:
                                    </h3>
                                    <p>{cita.select.userById.nameUser} {cita.select.userById.lastNameUser}</p>
                                </div>

                                <h3 className="text-2xl font-light">Informacion de la cita</h3>

                                <div className="flex border-l-2 border-gray-400 pl-8 mt-4 text-xl">
                                    <div className="mr-24">
                                        <h4 className="p-3">Hora</h4>
                                        <h4 className="p-3">Doctor</h4>
                                        <h4 className="p-3">Sede</h4>
                                        <h4 className="p-3">Valor</h4>

                                    </div>
                                    <div className="px-6 ">
                                        <p className="p-3">{cita.select.schedule.hora}</p>
                                        <p className="p-3">{cita.select.userMedic.nameUser} {cita.select.userMedic.lastNameUser}</p>
                                        <p className="p-3">{cita.select.site.nameSite}</p>
                                        <p className="p-3">35k</p>
                                    </div>

                                </div>
                            </article>
                            <button className="flex items-center justify-center bg-[#B20025] rounded-full px-32 py-2 w-40 h-auto text-white text-2xl mt-8 text-nowrap" onClick={() => onClick(cita.select.response.id)}>Cancelar Cita</button>
                        </>
                        :
                        ''}


                </div >
                <Footer />
            </main >
        </>

    )

}
export default UserCancelAppointment 