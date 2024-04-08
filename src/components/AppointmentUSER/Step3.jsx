import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { useSteps } from "../../context/MultiStepContext";
const input = 'border-secondaryGray border rounded-lg h-12 w-[425px] text-2xl font-light pl-3 pr-3'

const Step3 = () => {
    const { nextStep, backStep, register } = useSteps()
    return (
        <>
            <section className='flex-col flex items-center justify-center m-4'>
                <div className='flex-col flex mb-4'>
                    <label className='text-2xl mb-1'>Nombres</label>
                    <input disabled className={input} value='Cristina' {...register('Nombre')} />
                </div>
                <div className='flex-col flex mb-4'>
                    <label className='text-2xl mb-1'>Apellidos</label>
                    <input disabled className={input} value='Rodriguez' {...register('Apellido')} />
                </div>
                <div className='flex-col flex mb-4'>
                    <label className='text-2xl mb-1'>Número de Telefono</label>
                    <input disabled className={input} value='123456789' {...register('Telefono')} />
                </div>
                <div className='flex-col flex mb-4'>
                    <label className='text-2xl mb-1'>Correo Electrónico</label>
                    <input disabled className={input} value='pepe@example.com'{...register('Email')} />
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
export default Step3