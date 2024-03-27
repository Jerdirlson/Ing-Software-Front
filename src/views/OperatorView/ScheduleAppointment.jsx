import Calendar from "../../components/Calendar"
import RescheduleFormAppointment from "../../components/Appointment/RescheduleForm"
import InputField from "../../components/Appointment/InputField"

/**
 * 
 * @returns 
 */
const ScheduleAppointment = () => {
    return (
        <>
            <main className="w-full flex flex-col p-16">
                <div className="flex items-center">
                    <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-xl">Informacion Cita</h1><div className="w-full h-0.5 bg-gray-400" />
                </div>
                <section className="flex justify-between px-4 mx-16 mb-12 mt-10">
                    <section >
                        <div>
                            <h2>Formato de atención</h2>
                            <div className="border border-gray-400 p-2 mb-10">
                                <p>Presencial</p>
                                <p>Domiciliaria</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2">Seleccionar Especialista</h2>
                            <div className="my-2">
                                <button className="bg-blue-600 p-3">
                                    Si
                                </button>
                                <button className="bg-red-600 p-3">
                                    No
                                </button>
                            </div>
                            {true ?
                                <InputField type={"text"} name={"Cedula de Ciudadania"} placeholder={"Buscar..."} />
                                : ""}
                        </div>
                    </section>
                    <section className="flex justify-center">
                        <div className="flex flex-col">
                            <h2 className="text-gray-700 pb-1">Fecha y hora</h2>
                            <Calendar />
                        </div>
                        {/* AQUI SE LLAMA API Y MIRA LAS HORAS DISPONIBLES */}
                        <div className="flex flex-col px-4 mx-2 translate-y-12">
                            <h2 className="font-light p-1">Horas disponibles:</h2>

                            <select name="" id="">
                                <option value="">HORAS</option>
                                <option value="">value1</option>
                                <option value="">value2</option>


                            </select>
                        </div>
                    </section>
                    {/* IMPLEMENTAR LA LOGICA DE SI ES UNA CITA DE DOMICILIO O NO */}
                    {/* IMPLEMENTAR LA LOGICA DE SI ES UNA CITA DE DOMICILIO O NO */}
                    {/* IMPLEMENTAR LA LOGICA DE SI ES UNA CITA DE DOMICILIO O NO */}
                    <section className="flex flex-col mr-8">
                        <h2 className="font-light p-1">Domicilio</h2>
                        <div className="flex flex-col my-2">
                            <label >Barrio</label>
                            <InputField type={"text"} name={"Barrio"} isDisabled={true} />
                        </div>
                        <div className="flex flex-col my-2">
                            <label >Direccion</label>
                            <InputField type={"text"} name={"Direccion"} />
                        </div>
                        <div className="flex flex-col my-2">
                            <label >Informacion Adicional</label>
                            <InputField type={"text"} name={"Informacion Adicional"} />
                        </div>
                    </section>
                </section>
                <div className="flex items-center">
                    <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-xl">Informacion del paciente</h1><div className="w-full h-0.5 bg-gray-400" />
                </div>
                <form action="">
                    <section className="flex px-3 mx-16 mt-7" >
                        <div className="flex flex-col w-1/4 mr-48">
                            <div className="flex flex-col p-2">
                                <label>Nombres</label>
                                <InputField type={"text"} name={"Nombres"} />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Apellidos</label>
                                <InputField type={"text"} name={"Apellidos"} />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Numero de telefono</label>
                                <InputField type={"text"} name={"Numero de telefono"} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex mb-1">
                                <div className="flex flex-col p-2 ">
                                    <label>Tipo de documento</label>
                                    <select className="border-gray-400 border rounded-lg h-8" type="" >
                                        <option disabled selected value="">Selecciona una opción</option>
                                        <option name="Cedula de Ciudadania" value="">C.C</option>
                                        <option name="Tarjeta De indentidad" value="">T.I</option>

                                    </select >
                                </div>
                                <div className="flex flex-col p-2">
                                    <label>Numero de documento</label>
                                    <InputField type={"text"} name={"Numero de documento"} />
                                </div>
                            </div>

                            <div className="flex flex-col p-2">
                                <label>Correo electronico</label>
                                <InputField type={"email"} name={"Correo Electronico"} />
                            </div>
                        </div>
                    </section>
                    <section className="w-full flex justify-end ">
                        <button className="bg-secondary-blue rounded-lg px-14 py-2 text-white text-2xl">
                            Continuar
                        </button>
                    </section>


                </form>

            </main>
        </>
    )
}
export default ScheduleAppointment