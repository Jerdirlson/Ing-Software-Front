import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { useSteps } from "../../context/MultiStepContext";
import { useAppointmentScheduler } from '../../hooks/useAppointmentScheduler';
import Calendar from '../Calendar';
const input = 'border-secondaryGray border rounded-lg h-12 w-[425px] text-2xl font-light pl-3 pr-3'

const Step2 = () => {
    const { nextStep, backStep, register } = useSteps()
    const { setSelectedDate, hoursAvailable } = useAppointmentScheduler();    // Custom hook
    return (
        <> {/* Inputs */}
            <section className='flex-col flex items-center justify-center m-4'>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>Seleccionar un especialista</label>
                    <select className={input} placeholder={"Selecciona una opción"} {...register('Especialista')}>
                        <option defaultValue=''>Seleccione una opción</option>
                        <option>Christiti</option>
                    </select>
                </div>
                <div>
                    <Calendar setSelectedDate={setSelectedDate}/>
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
                </div>
            </section>
            <div className='flex h-10 w-auto items-center justify-between'>
                <button className='justify-start rotate-180' onClick={() => backStep()}>
                    <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                </button>
                <div className='flex items-center'>
                    <h3 className='text-xl font-light'></h3>
                    <button onClick={() => nextStep()}>
                        <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                    </button>

                </div>

            </div>
        </>

    )
}
export default Step2