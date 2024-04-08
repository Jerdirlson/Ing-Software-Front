import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { useSteps } from "../../context/MultiStepContext";
const input = 'border-secondaryGray border rounded-lg h-12 w-[425px] text-2xl font-light pl-3 pr-3'

const Step1 = () => {
    const { nextStep, register } = useSteps()
    return (
        <>
            {/* Inputs */}
            <section className='flex-col flex items-center justify-center m-14'>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>¿Que tipo de cita desea?</label>
                    <select className={input} placeholder={"Selecciona una opción"} {...register('TipoCita')}>
                        <option defaultValue=''>Seleccione una opción</option>
                        <option>General</option>
                    </select>
                </div>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>Sede</label>
                    <select className={input} placeholder={"Selecciona una opción"} {...register('TipoSede')}>
                        <option defaultValue=''>Seleccione una opción</option>
                        <option>Calle 45 No. 55 - 65. Bucaramanga, Colombia.</option>
                    </select>
                </div>
            </section>
            <div className='flex h-10 w-auto items-center justify-end'>
                <div className='flex items-center'>
                    <h3 className='text-xl font-light'>Continuar el agendamiento</h3>
                    <button onClick={() => nextStep()}>
                        <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                    </button>
                </div>
            </div>
        </>




    )
}
export default Step1