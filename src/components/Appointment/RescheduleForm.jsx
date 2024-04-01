import Calendar from "../Calendar.jsx"
import { useState } from "react";
import { useAppointment_ReScheduler } from "../../hooks/useAppointmentScheduler.js";


const RescheduleFormAppointment = ({ cita }) => {
    const { setSelectedDate, hoursAvailable, onSubmit, register } = useAppointment_ReScheduler();    // Custom hook
    console.log(cita)
    //     setMedic(cita.medic)
    return (
        <div className="p-4 text-xl font-light">
            <h2 className="mb-4">Información de paciente</h2>
            <section className="grid grid-cols-3 justify-self-start border-l-2 border-gray-400 pl-8">
                <div>
                    <h3 className="font-normal">Nombre Completo</h3>
                    <p className="italic">Juan David Carvajal</p>
                </div>
                <div>
                    <h3 className="font-normal">Numero de telefono</h3>
                    <p className="italic">3188210834</p>
                </div>
                <div>
                    <h3 className="font-normal">Correo electronico</h3>
                    <p className="italic">correoElectronico@gmail.com</p>
                </div>
                <div>
                    <h3 className="font-normal">EPS</h3>
                    <p className="italic">EjemploEps</p>
                </div>
                <div>
                    <h3 className="font-normal">Documento</h3>
                    <p className="italic">937240679</p>
                </div>
                <div>
                    <h3 className="font-normal">Tipo</h3>
                    <p className="italic">Cedula de Ciudadania</p>
                </div>
            </section>
            <h2 className="italic my-14">Información de paciente</h2>
            <form onSubmit={onSubmit}>
                <section className="flex border-l-2 border-gray-400 pl-8">
                    <section className="flex justify-center mr-12 ">
                        <div className="flex flex-col">
                            <h2 className="text-gray-700 pb-1">Fecha y hora</h2>
                            <Calendar setSelectedDate={setSelectedDate} />
                        </div>
                        {/* AQUI SE LLAMA API Y MIRA LAS HORAS DISPONIBLES */}
                        <div className="flex flex-col px-4 mx-2 translate-y-12">
                            <h2 className="font-light p-1 text-nowrap">Horas disponibles:</h2>
                            <select name="" id=""{...register('hora')}>
                                <option disabled defaultValue={"Seleccione una hora"} value="">Seleccione una hora</option>
                                {hoursAvailable &&
                                    hoursAvailable.map((horaItem, index) => (
                                        <option key={index} value={horaItem.value}>{horaItem.hora}</option>
                                    ))}
                            </select>
                        </div>
                    </section>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="p-2 mr-32">
                                <h3 className="font-normal">Atención</h3>
                                <p className="italic">Presencial</p>
                            </div>

                            <div className="p-2 text-nowrap">
                                <h3 className="font-normal ">Tipo de Cita</h3>
                                <p className="italic">Medicina General</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <div>
                                <h3 className="font-normal">Doctor</h3>
                                {/* {cita.doctorName} */}
                                <p className="italic">Yeyas J. Santamaria</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <div>
                                <h3 className="font-normal">Id Cita</h3>
                                {/* {cita.id} */}
                                <p className="italic">id</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex justify-end items-end px-32">
                        <button type="submit" className="bg-secondary-blue rounded-lg px-14 py-2 text-white text-2xl">
                            Continuar
                        </button>
                    </div>
                </section>

            </form>
        </div>
    )
}
export default RescheduleFormAppointment