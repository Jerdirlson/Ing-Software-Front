/**
 * 
 */
const InfoAppointment = () => {
    return (
        <article className='bg-[#F2F2F2] p-8 rounded-2xl flex flex-col'>
            <div className="flex text-2xl mb-4">
                <h3 className="font-light pr-8">
                    Paciente:
                </h3>
                <p>Juan Carvajal</p>
            </div>

            <h3 className="text-2xl font-light">Informacion de la cita</h3>

            <div className="border-l-2 border-gray-400 pl-8 mt-4 text-xl">
                <div className="flex p-3">
                    <h4 className="font-bold pr-44">Hora</h4>
                    <p>4:15pm</p>
                </div>
                <div className="flex p-3">
                    <h4 className="font-bold pr-40">Doctor</h4>
                    <p>xxxxxxxxxxx</p>
                </div>
                <div className="flex p-3">
                    <h4 className="font-bold pr-28">Consultorio</h4>
                    <p> xx-x</p>
                </div>
                <div className="flex p-3">
                    <h4 className="font-bold pr-44">Valor</h4>
                    <p>35k</p>
                </div>
            </div>
        </article>
    )
}
export default InfoAppointment