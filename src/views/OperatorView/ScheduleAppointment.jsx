import { useLocation } from "react-router-dom"
import Calendar from "../../components/Calendar"
import { Sites } from "../../data/Sites.data"
import { useAppointmentScheduler } from "../../hooks/useAppointmentScheduler"
import { useEffect } from "react"


const className = `border-gray-400 border rounded-lg h-8 p-1`
/**
 * 
 * @returns {Component} Add appointment view component
 */
const ScheduleAppointment = () => {
    const { register, onSubmit, setSelectedDate, hoursAvailable, setService, medics,reset } = useAppointmentScheduler();    // Custom hook
    const location = useLocation();
    const { category } = location.state || {};
    useEffect(()=>{
        reset()
    },[category])
    return (
        <>
            <main className="w-full flex flex-col p-16">
                <div className="flex items-center">
                    <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-xl">Informacion Cita : {category}</h1><div className="w-full h-0.5 bg-gray-400" />
                </div>
                <form onSubmit={onSubmit}>

                    <section className="flex px-4 mx-16 mb-12 mt-10">
                        <section className="mr-80">
                            <div>
                                <h2>Formato de atención</h2>
                                <div className="border border-gray-400 p-2 mb-10">
                                    <p>• Presencial</p>
                                    <p>Domiciliaria</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-2">Seleccionar Especialista</h2>
                                <select className={className} type=""{...register('medic')} onClick={() => {
                                    console.log('click')
                                    setService(category)
                                }} >
                                    <option disabled defaultValue="Selecciona una opción">Selecciona una opción</option>
                                    {medics && medics.map(medic => (
                                        <option key={medic.medicId} value={medic.medicId}>
                                            {medic.nameUser} {medic.lastNameUser}
                                        </option>
                                    ))}

                                </select >
                            </div>
                        </section>
                        <section className="flex justify-center">
                            <div className="flex flex-col">
                                <h2 className="text-gray-700 pb-1">Fecha y hora</h2>
                                <Calendar setSelectedDate={setSelectedDate} />
                            </div>
                            {/* AQUI SE LLAMA API Y MIRA LAS HORAS DISPONIBLES */}
                            <div className="flex flex-col px-4 mx-2 translate-y-12">
                                <h2 className="font-light p-1">Horas disponibles:</h2>

                                <select name="" id=""{...register('hora')}>
                                    <option disabled defaultValue={"Seleccione una hora"} value="">Seleccione una hora</option>
                                    {hoursAvailable &&
                                        hoursAvailable.map((horaItem, index) => (
                                            <option key={index} value={horaItem.value}>{horaItem.hora}</option>
                                        ))}
                                </select>
                            </div>
                        </section>

                    </section>
                    <div className="flex items-center">
                        <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-xl">Informacion del paciente</h1><div className="w-full h-0.5 bg-gray-400" />
                    </div>
                    <section className="flex px-3 mx-16 mt-7" >
                        <div className="flex flex-col w-1/4 mr-48">
                            <div className="flex flex-col p-2">
                                <label>Nombres</label>
                                <input className={className} type="text" name={"Nombres"}
                                    {...register('nombre')} />

                            </div>
                            <div className="flex flex-col p-2">
                                <label>Apellidos</label>
                                <input className={className} type="text" name={"Apellidos"}
                                    {...register('apellido')} />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Numero de telefono</label>
                                <input className={className} type="text" name={"Numero de telefono"}
                                    {...register('telefono')} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex p-2">
                                <div className="flex flex-col ">
                                    <label>Tipo de documento</label>
                                    <select className={className} type=""{...register('documento_type')} >
                                        <option disabled defaultValue="Selecciona una opción">Selecciona una opción</option>
                                        <option name="Cedula de Ciudadania" value="">C.C</option>
                                        <option name="Tarjeta De indentidad" value="">T.I</option>

                                    </select >
                                </div>
                                <div className="flex flex-col ml-2 ">
                                    <label>Numero de documento</label>
                                    <input className={className} type="text" name={"Numero de documento"}
                                        {...register('documento')} />
                                </div>
                            </div>

                            <div className="flex flex-col p-2">
                                <label>Correo electronico</label>
                                <input className={className} type="email" name={"Correo Electronico"}
                                    {...register('email')} />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Sede I.P.S</label>
                                <select className={className} name={"Sitio"}
                                    {...register('idSite')} >
                                    <option disabled defaultValue={"Seleccione una sede"} value="">Seleccione una sede</option>
                                    {Sites.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </section>
                    <section className="w-full flex justify-end ">
                        <button type="submit" className="bg-secondary-blue rounded-lg px-14 py-2 text-white text-2xl">
                            Continuar
                        </button>
                    </section>
                </form>
            </main>
        </>
    )
}
export default ScheduleAppointment