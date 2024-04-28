import { useSteps } from "../../context/MultiStepContext"
import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { Sites } from "../../data/Sites.data"

const Confirm = () => {
    const { backStep, watch, selectedDate, sent } = useSteps()
    const data = watch();
    return (
        <>
            {sent ? '' : <button className='justify-start rotate-180' onClick={() => backStep()}>
                <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
            </button>}
            <section className='flex flex-col items-center'>
                <h1 className='font-bold text-4xl '>Confirmación de cita</h1>

                <section className="grid grid-cols-2 gap-x-36 gap-y-4 p-8">
                    <div>
                        <h1>Fecha:</h1>
                        <p className="font-light">{selectedDate}</p>
                    </div>
                    <div>
                        <h1>Correo electronico:</h1>
                        <p className="font-light">{data.email}</p>
                    </div>

                    <div>
                        <h1>Hora:</h1>
                        <p className="font-light">{data.hora}</p>
                    </div>
                    <div>
                        <h1>Nombre:</h1>
                        <p className="font-light">{data.nombre}</p>
                    </div>
                    <div>
                        <h1>Medico:</h1>
                        {/* HACER UN SERVICE O UNA FUNCION PARA ESTO  */}
                        <p className="font-light"> 
                            {/* {`${medics.find(medic => medic.medicId == data.medic)?.nameUser || 'MedicName Unknown'} ${medics.find(medic => medic.medicId == data.medic)?.lastNameUser || 'MedicLastName Unknown'}`} */}
                        </p>
                    </div>
                    <div>
                        <h1>Apellido:</h1>
                        <p className="font-light">{data.apellido}</p>
                    </div>
                    <div>
                        <h1>Tipo de servicio:</h1>
                        <p className="font-light">{data.service}</p>
                    </div>
                    <div>
                        <h1>Número de Documento:</h1>
                        <p className="font-light">{data.documento}</p>
                    </div>
                    <div>
                        <h1>Lugar de la cita:</h1>
                        <p className="font-light">
                            {`${Sites.find(site => site.id == data.idSite)?.name || 'Site Unknown'}`}
                        </p>
                    </div>


                </section>
            </section>
            {sent ? '' : <div className='flex w-auto items-center justify-end'>
                <button type="submit">
                    <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                </button>

            </div>}

        </>
    )

}
export default Confirm