import RescheduleFormAppointment from "../../components/RescheduleForm"

/**
 * 
 * @returns 
 */
const RescheduleAppointment = () => {
    const yeye = false
    return (
        <>
            <main className="w-full flex flex-col items-center justify-center">
                <section>
                    <header className="p-4 mt-4">
                        <h1 className="font-light text-2xl mb-2">Reasignar cita</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col justify-self-start">
                        <h2 className="font-bold">Numero de documento</h2>
                        <input className="border-2  border-black" type="text" name="CC" id="" />
                    </section>
                    {/* CALL API TO INFO */}
                    {yeye ?  <RescheduleFormAppointment/>: ''}


                </section>
            </main>
        </>
    )
}
export default RescheduleAppointment