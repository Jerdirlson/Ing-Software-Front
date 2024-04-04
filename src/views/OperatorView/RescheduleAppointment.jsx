import RescheduleFormAppointment from "../../components/AppointmentOPERATOR/RescheduleForm"
import { useInfoAppointment } from "../../hooks/useInfoAppointment"
const className = `border-gray-400 border rounded-lg h-8 p-1`

/**
 * 
 * @returns 
 */
const RescheduleAppointment = () => {
    const { register, cita, onSubmit } = useInfoAppointment()    //cita : peticion al back

    return (
        <>
            <main className="w-full flex flex-col p-10">
                <section className="p-2">
                    <header>
                        <h1 className="text-2xl mb-2">Reasignar cita</h1>
                        <div className="w-full h-0.5 bg-gray-500" />
                    </header>
                    <section className="flex flex-col justify-self-start mt-8 ">
                        <h2 className="text-xl">Codigo de la cita</h2>
                        <form onSubmit={onSubmit}>
                            <input className={`${className} w-1/3`} type={"text"} name={"Codigo de Cita"}{...register("id")} />
                        </form>
                    </section>
                    {/* CALL API TO INFO */}
                    {cita !== null ? <RescheduleFormAppointment props={cita.select} /> : ''}
                </section>
            </main>
        </>
    )
}
export default RescheduleAppointment