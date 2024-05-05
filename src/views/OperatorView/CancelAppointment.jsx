import { useEffect } from "react";
import InfoAppointment from "../../components/AppointmentOPERATOR/InfoAppointment"
import { useInfoAppointment } from "../../hooks/useInfoAppointment";
import { cancel_appointment } from "../../services/appointments/appointment.service";
import { send_email_cancel } from "../../services/email.service";
import { getCorreoDataCancel } from "../../utils/correo";
import Alerta from "../../components/Alerta";
const className = `border-gray-400 border rounded-lg h-8 p-1`

/**
 * 
 * @returns 
 */

const CancelAppointment = () => {
    const { cita, register, onSubmit, alert, setAlert, errors } = useInfoAppointment()

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false); // Ocultar la alerta automáticamente después de un tiempo
        }, 3000);
        return () => clearTimeout(timer);
    }, [alert]);

    const onClick = async (data) => {
        // Logica de obtencion de fecha & data to send => correo
        try {
            const correoData = getCorreoDataCancel(cita)
            //---------------------------------------
            // console.log(fecha[0])
            console.log(data)
            console.log(correoData)
            //Llamadas fetch      
            const response = cancel_appointment(data)

            if (response) {
                send_email_cancel(correoData)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <main className="w-full flex flex-col p-36 ">
                <section>
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="font-light text-3xl mb-2">Cancelar cita</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    {alert && <Alerta info="Esta cita es no existe, asegurate de ingresar una cita existente" />}
                    <section className="flex flex-col p-4">
                        <h2 className="text-2xl ">Codigo de cita</h2>
                        <form onSubmit={onSubmit}>
                            <input className={`${className} w-1/3`} type="text" name="Codigo identificador de Cita" {...register('id')} />
                            {
                                errors.id?.message && <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">{errors.id.message}</p>
                            }
                        </form>
                        {/* <input className="w-1/3 border border-gray-400 rounded-lg " type="text" name="CC" id="" /> */}
                    </section>
                    {/* CALL API TO INFO */}
                    {cita !== null ?
                        <section >
                            <InfoAppointment props={cita} />
                            <section className="w-full flex justify-end mt-12">
                                <button onClick={() => onClick(cita.select.response.id)} className="bg-red-600 rounded-lg px-32 py-2 text-white text-2xl">
                                    Cancelar Cita
                                </button>
                            </section>
                        </section> : ''}
                </section>


            </main>
        </>
    )
}
export default CancelAppointment