
/**
 * 
 * @returns 
 */
const CancelAppointment = () => {
    return (
        <>
            <main className="w-full flex flex-col items-center justify-center">
                <section>
                    <header className="p-4 mt-4">
                        <h1 className="font-light text-2xl mb-2">Cancelar Cita</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col justify-self-start">
                        <h2 className="font-bold">Numero de documento</h2>
                        <input className="border-2  border-black" type="text" name="CC" id="" />
                    </section>
                    {/* CALL API TO INFO */}
                    {
                        <section >
                            <div className=""></div>
                            <button>

                            </button>
                        </section>}
                </section>


            </main>
        </> 
    )
}
export default CancelAppointment