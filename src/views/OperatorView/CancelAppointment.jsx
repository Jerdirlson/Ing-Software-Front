import InfoAppointment from "../../components/Appointment/InfoAppointment"
import InputField from "../../components/Appointment/InputField"

/**
 * 
 * @returns 
 */
const CancelAppointment = () => {
    return (
        <>
            <main className="w-full flex flex-col p-36 ">
                <section>
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="font-light text-3xl mb-2">Cancelar Cita</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col p-4">
                        <h2 className="text-2xl ">Numero de documento</h2>
                        <InputField type={"text"} name={"Cedula de Ciudadania"} size={"w-1/3"} />
                        {/* <input className="w-1/3 border border-gray-400 rounded-lg " type="text" name="CC" id="" /> */}
                    </section>
                    {/* CALL API TO INFO */}
                    {
                        <section >
                            <InfoAppointment />
                            <section className="w-full flex justify-end mt-12">
                                <button className="bg-red-600 rounded-lg px-32 py-2 text-white text-2xl">
                                    Cancelar Cita
                                </button>
                            </section>
                        </section>}
                </section>


            </main>
        </>
    )
}
export default CancelAppointment