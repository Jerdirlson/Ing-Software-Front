/**
 * 
 */
const InfoAppointment = ({props}) => {
    return (
        <article className='bg-[#F2F2F2] p-8 rounded-2xl flex flex-col'>
            <div className="flex text-2xl mb-4">
                <h3 className="font-light pr-8">
                    Paciente:
                </h3>
                <p>{props.select.userById.nameUser} {props.select.userById.lastNameUser}</p>
            </div>

            <h3 className="text-2xl font-light">Informacion de la cita</h3>

            <div className="flex border-l-2 border-gray-400 pl-8 mt-4 text-xl">
                <div className="mr-24">
                    <h4 className="p-3">Hora</h4>
                    <h4 className="p-3">Doctor</h4>
                    <h4 className="p-3">Sede</h4>
                    <h4 className="p-3">Valor</h4>

                </div>
                <div className="px-6 ">
                    <p className="p-3">{props.select.schedule.hora}</p>
                    <p className="p-3">{props.select.userMedic.nameUser} {props.select.userMedic.lastNameUser}</p>
                    <p className="p-3">{props.select.site.nameSite}</p>
                    <p className="p-3">35k</p>
                </div>

            </div>
        </article>
    )
}
export default InfoAppointment