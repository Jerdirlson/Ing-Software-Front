import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { Link } from "react-router-dom";
const input = 'border-secondaryGray border rounded-lg h-12 w-[425px] text-2xl font-light pl-3 pr-3'

const Step1 = () => {
    return (
        <>
            {/* Titulo */}
            <section className='flex flex-col items-center'>
                <h1 className='font-bold text-4xl'>Agendamiento de cita</h1>
                <h3 className='font-light text-2xl mt-2 text-primaryGray'>Paso 1 de 3</h3>
                {/* Seguimiento de los pasos (Circulos) */}
                <div className='flex items-center justify-center w-[700px]'>
                    <div className='h-3 w-3 rounded-full bg-primaryGray' />
                    <div className='h-2 w-2 rounded-full mr-[6px] ml-[4px] bg-primaryGray' />
                    <div className='h-2 w-2 rounded-full bg-primaryGray' />
                </div>
            </section>
            {/* Inputs */}
            <section className='flex-col flex items-center justify-center m-14'>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>¿Que tipo de cita desea?</label>
                    <select className={input} placeholder={"Selecciona una opción"}>
                        <option defaultValue=''>Seleccione una opción</option>
                        <option>General</option>
                    </select>
                </div>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>Sede</label>
                    <select className={input} placeholder={"Selecciona una opción"}>
                        <option defaultValue=''>Seleccione una opción</option>
                        <option>Calle 45 No. 55 - 65. Bucaramanga, Colombia.</option>
                    </select>
                </div>
            </section>
            <div className='flex h-10 w-auto items-center justify-end'>
                <h3 className='text-xl font-light'>Continuar el agendamiento..</h3>
                <Link to={'/agendamiento/step2'}>
                    <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                </Link>
            </div>
        </>
    )
}
export default Step1