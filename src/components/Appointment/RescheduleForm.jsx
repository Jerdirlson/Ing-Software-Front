import Calendar from "../Calendar.jsx"

const RescheduleFormAppointment = () => {
    return (
        <div className="p-4 text-xl font-light italic">
            <h2 className="mb-4">Información de paciente</h2>
            <section className="grid grid-cols-3 justify-self-start border-l-2 border-gray-400 pl-8">
                <div>
                    <h3 className="font-normal">Nombre Completo</h3>
                    <p>Juan David Carvajal</p>
                </div>
                <div>
                    <h3 className="font-normal">Numero de telefono</h3>
                    <p>3188210834</p>
                </div>
                <div>
                    <h3 className="font-normal">Correo electronico</h3>
                    <p>correoElectronico@gmail.com</p>
                </div>
                <div>
                    <h3 className="font-normal">EPS</h3>
                    <p>EjemploEps</p>
                </div>
                <div>
                    <h3 className="font-normal">Documento</h3>
                    <p>937240679</p>
                </div>
                <div>
                    <h3 className="font-normal">Tipo</h3>
                    <p>Cedula de Ciudadania</p>
                </div>
            </section>
            <h2 className="italic my-14">Información de paciente</h2>
            <form action="">
                <section className="flex border-l-2 border-gray-400 pl-8">
                    <div className="w-1/4 mr-32">
                        <h3 className="font-normal">Fecha y hora</h3>
                        <Calendar />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="p-2 mr-32">
                                <h3 className="font-normal">Atención</h3>
                                <p>Presencial</p>
                            </div>

                            <div className="p-2">
                                <h3 className="font-normal">Tipo de Cita</h3>
                                <p>Medicina General</p>
                            </div>
                        </div>

                        <div className="p-2">
                            <div>
                                <h3 className="font-normal">Doctor</h3>
                                <p>Yeyas J. Santamaria</p>
                            </div>
                        </div>

                    </div>

                </section>
                <div className="w-full flex justify-end px-32">
                    <button className="bg-secondary-blue rounded-lg px-14 py-2 text-white">
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    )
}
export default RescheduleFormAppointment