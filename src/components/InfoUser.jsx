/**
 * 
 */
const InfoUser = ({props}) => {
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
                    <h4 className="p-3">Edad ??</h4>
                    <h4 className="p-3">Género</h4>
                    <h4 className="p-3">Sede</h4>
                    <h4 className="p-3">EPS</h4>

                </div>
                <div className="px-6 ">
                    <p className="p-3">{props.select.userById.emailUser}</p>
                    <p className="p-3">---</p>
                    <p className="p-3">{props.select.site.nameSite}</p>
                    <p className="p-3">{props.select.eps.nameEps}</p>
                </div>

            </div>
        </article>
    )
}
export default InfoUser