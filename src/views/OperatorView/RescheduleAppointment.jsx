import InputField from "../../components/Appointment/InputField"
import RescheduleFormAppointment from "../../components/Appointment/RescheduleForm"

/**
 * 
 * @returns 
 */
const RescheduleAppointment = () => {
    const yeye = true
    return (
        <>
            <main className="w-full flex flex-col p-10">
                <section className="p-4">
                    <header className="my-4">
                        <h1 className="font-light text-2xl mb-2">Reasignar cita</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col justify-self-start">
                        <h2 className="font-bold">Numero de documento</h2>
                        <InputField type={"text"} name={"Cedula de Ciudadania"} size={"w-1/3"}/>
                    </section>
                    {/* CALL API TO INFO */}
                    {yeye ?  <RescheduleFormAppointment/>: ''}


                </section>
            </main>
        </>
    )
}
export default RescheduleAppointment