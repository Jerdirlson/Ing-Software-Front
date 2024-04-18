import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { useSteps } from "../../context/MultiStepContext";
import { useAppointmentSchedulerUSER } from '../../hooks/useAppointmentScheduler';
const input = 'border-secondaryGray border rounded-lg h-12 w-[425px] text-2xl font-light pl-3 pr-3'

const Step1 = () => {
    const { nextStep, register } = useSteps()
    return (
        <>
            {/* Inputs */}
            <section className='flex-col flex items-center justify-center m-14'>
                <div className='flex-col flex m-4'>
                  <label>Poner un buscar cita por id , y que traiga datos basicos de la cita encontrada como en el de op</label>  
                </div>
                <div className='flex-col flex m-4'>
                   
                </div>
            </section>
            <div className='flex h-10 w-auto items-center justify-end'>
                <div className='flex items-center'>
                    <h3 className='text-xl font-light'>Continuar el Re-Agendamiento</h3>
                    <button onClick={() => nextStep()}>
                        <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                    </button>
                </div>
            </div>
        </>




    )
}
export default Step1