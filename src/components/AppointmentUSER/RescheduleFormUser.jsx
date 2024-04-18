import { useEffect } from "react";
import { useAppointment_ReScheduler } from "../../hooks/useAppointmentScheduler";
import Calendar from "../Calendar";

const RescheduleFormAppointmentUser = ({ props }) => {
    const { setSelectedDate, hoursAvailable, onSubmit, register, setCita } = useAppointment_ReScheduler();    // Custom hook
    useEffect(() => {
        setCita(props)
    }, [setSelectedDate]);

    console.log(props)
    return (
        <>
            < article className='h-auto w-[700px] bg-white rounded-[40px] shadow-bigShadow p-10 mt-12'>
                <div className="flex flex-col text-2xl mb-4">
                    <h3 className="font-light my-6">
                        Seleccione el nuevo horario para su cita:
                    </h3>
                    <form onSubmit={onSubmit}>
                        <section className="flex flex-col border-l-2 border-gray-400 pl-8 text-sm">
                            <section className="flex justify-center mx-12 ">
                                <div className="flex flex-col">
                                    <h2 className="text-gray-700 pb-1">Fecha y hora</h2>
                                    <Calendar setSelectedDate={setSelectedDate} />
                                </div>
                                {/* AQUI SE LLAMA API Y MIRA LAS HORAS DISPONIBLES */}
                                <div className="flex flex-col px-2 mx-2 translate-y-12">
                                    <h2 className="font-light p-1 text-nowrap">Horas disponibles:</h2>
                                    <select name="" id=""{...register('hora')}>
                                        <option disabled defaultValue={"Seleccione una hora"} value="">Seleccione una hora</option>
                                        {hoursAvailable &&
                                            hoursAvailable.map((horaItem, index) => (
                                                <option key={index} value={horaItem.value}>{horaItem.hora}</option>
                                            ))}
                                    </select>
                                    <div className="flex flex-col mt-6">
                                        <div className="flex">
                                            <div className="p-2 mr-32 text-nowrap">
                                                <h3 className="font-normal ">Tipo de Cita</h3>
                                                <p className="italic">{props.service.nameService}</p>
                                            </div>

                                            <div className="p-2 text-nowrap">
                                                <h3 className="font-normal">Id Cita</h3>
                                                {/* {cita.id} */}
                                                <p className="italic">{props.response.id}</p>
                                            </div>
                                        </div>
                                        <div className="flex p-2">
                                            <div>
                                                <h3 className="font-normal">Doctor</h3>
                                                {/* {cita.doctorName} */}
                                                <p className="italic">{props.userMedic.nameUser} {props.userMedic.lastNameUser}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </section>

                        <div className="w-full flex justify-end items-end mt-10">
                            <button type="submit" className="bg-secondary-blue rounded-lg px-14 py-2 text-white text-2xl">
                                Continuar
                            </button>
                        </div>
                    </form>
                </div>
            </article>
        </>
    )
}
export default RescheduleFormAppointmentUser
