import RescheduleFormAppointment from "../../components/Appointment/RescheduleForm"
const className = `border-gray-400 border rounded-lg h-8 p-1`

/**
 * 
 * @returns 
 */
const RescheduleAppointment = () => {
    const yeye = true
    return (
        <>
            <main className="w-full flex flex-col p-10">
                <section className="p-2">
                    <header>
                        <h1 className="text-2xl mb-2">Reasignar cita</h1>
                        <div className="w-full h-0.5 bg-gray-500" />
                    </header>
                    <section className="flex flex-col justify-self-start mt-8">
                        <h2 className="text-xl">Numero de documento</h2>
                        <input className={`${className} w-1/3`} type={"text"} name={"Cedula de Ciudadania"}/>
                    </section>
                    {/* CALL API TO INFO */}
                    {yeye ?  <RescheduleFormAppointment/>: ''}


                </section>
            </main>
        </>
    )
}
export default RescheduleAppointment