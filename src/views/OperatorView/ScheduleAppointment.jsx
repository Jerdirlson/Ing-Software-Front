import RescheduleFormAppointment from "../../components/RescheduleForm"

/**
 * 
 * @returns 
 */
const ScheduleAppointment = () => {
    return (
        <>
            <main className="w-full flex flex-col justify-center">
                <h1 className="italic font-light mx-4 px-4">Informacion Cita</h1>
                <section className="flex justify-around px-4 ">
                    <section className="justify-center">
                        <div>
                            <h2>Formato de atención</h2>
                            <div>
                                <p>Presencial</p>
                                <p>Domiciliaria</p>
                            </div>
                        </div>
                        <div>
                            <h2>Seleccionar Especialista</h2>
                            <div>
                                <button>
                                    Si
                                </button>
                                <button>
                                    No
                                </button>
                            </div>
                            {true ? <input className="" placeholder="Buscar..." /> : ""}
                        </div>
                    </section>
                    <section className="justify-center">
                        <h2 className="font-light">Fecha y hora</h2>
                    </section>

                    <section className="flex flex-col justify-center">
                        <h2 className="font-light">Domicilio</h2>
                        <label >Barrio</label>
                        <input type="text" name="" id="" />

                        <label >Direccion</label>
                        <input type="text" name="" id="" />

                        <label >Informacion Adicional</label>
                        <input type="text" name="" id="" />
                    </section>
                </section>

                <h1 className="italic font-light mx-4 px-4">Informacion del paciente</h1>
                <form action="">
                    <section className="flex justify-evenly p-8">

                        <div className="flex flex-col">
                            <label className="font-bold">Nombres</label>
                            <input type="text" />
                            <label className="font-bold">Apellidos</label>
                            <input type="text" />
                            <label className="font-bold">Numero de telefono</label>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Tipo de documento</label>
                            <input type="text" />
                            <label className="font-bold">Numero de documento</label>
                            <input type="text" />
                            <label className="font-bold">Correo electronico</label>
                            <input type="text" />

                        </div>
                    </section>
                    <div className="w-full flex justify-end px-32">
                        <button className="bg-secondary-blue rounded-lg px-10 py-2">
                            Continuar
                        </button>
                    </div>


                </form>

            </main>
        </>
    )
}
export default ScheduleAppointment