import { useLocation } from 'react-router-dom';
import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import { useSteps } from "../../context/MultiStepContext";
import { useAppointmentSchedulerUSER } from '../../hooks/useAppointmentScheduler';
import { services } from '../../data/Services.data';
import { Sites } from '../../data/Sites.data';
const input = 'border-secondaryGray border rounded-lg h-12 w-[425px] text-2xl font-light pl-3 pr-3'

const Step1 = () => {

    const location = useLocation();
    const { service } = location.state || {};
    const { nextStep, register } = useSteps()

    return (
        <>
            {/* Inputs */}
            <section className='flex-col flex items-center justify-center m-14'>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>¿Que tipo de cita desea?</label>
                    <select className={input} placeholder={"Selecciona una opción"} defaultValue={service} {...register('service')}>
                        <option disabled value=''>Seleccione una opción</option>
                        {Object.keys(services).map(key => (
                            <option key={services[key].id} value={services[key].title}>
                                {services[key].title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex-col flex m-4'>
                    <label className='text-2xl mb-1'>Sede</label>
                    <select className={input} placeholder={"Selecciona una opción"} {...register('idSite')}>
                        <option defaultValue=''>Seleccione una opción</option>
                        {Sites.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))}
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