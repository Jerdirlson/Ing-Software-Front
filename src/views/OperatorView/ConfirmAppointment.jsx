import InfoAppointment from "../../components/Appointment/InfoAppointment"
import { useInfoAppointment } from "../../hooks/useInfoAppointment"
const className = `border-gray-400 border rounded-lg h-8 p-1`

/**
 * 
 * @returns 
 */
const ConfirmAppointment = () => {
    const { cita ,register ,onSubmit} = useInfoAppointment()
    return (
        <>
            <main className="w-full flex flex-col p-36">
                <section >
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="font-light text-3xl mb-2">Consultar información de una cita</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col p-4">
                        <h2 className="text-2xl">Codigo de cita</h2>
                        <form onSubmit={onSubmit}>
                            <input className={`${className} w-1/3`} type={"text"} name={"Codigo identificador de Cita"} {...register('id')} />
                        </form>
                        {/* <input className="w-1/3 border border-gray-400 rounded-lg " type="text" name="CC" id="" /> */}
                    </section>
                    {/* CALL API TO INFO */}
                    {cita!==null ?
                        <section >
                            <InfoAppointment props={cita}/>
                            <section className="w-full flex justify-end mt-12">
                                <button className="bg-secondary-blue rounded-lg px-32 py-2 text-white text-2xl">
                                    Confirmar Llegada
                                </button>
                            </section>
                        </section> : ''}
                </section>


            </main >
        </>
    )
}
export default ConfirmAppointment