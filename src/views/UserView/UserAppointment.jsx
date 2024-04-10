import Footer from '../../components/Footer.jsx'
import NavBar from '../../components/NavBar.jsx'
import { StepsProvider, useSteps } from "../../context/MultiStepContext";
import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'
import Step1 from '../../components/AppointmentUSER/Step1.jsx';
import Step2 from '../../components/AppointmentUSER/Step2.jsx';
import Step3 from '../../components/AppointmentUSER/Step3.jsx';
import Confirm from '../../components/AppointmentUSER/Confirm.jsx';

const ScheduleAppointment = () => {

    // console.log("Schedule")

    const { currentStep, onSubmit, sent } = useSteps()
    const actualStep = (currentStep) => {
        switch (currentStep) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Confirm />
            default:
                return <Step1 />
        }
    }
    return (
        <>
            <NavBar />
            <main className='h-screen flex flex-col bg-gradient-to-b from-[#FFFFFF] to-[#EFF0F1]'>

                <div className='flex flex-col justify-center items-center h-full '>
                    {/* Tarjeta */}
                    <article className='h-auto w-[700px] bg-white rounded-[40px] shadow-bigShadow p-10 mt-12'>
                        <div>
                            {/* Titulo && Seguimiento de circulos  */}
                            {currentStep === 4 ? '' :
                                <section className='flex flex-col items-center'>
                                    <h1 className='font-bold text-4xl'>Agendamiento de cita</h1>
                                    <h3 className='font-light text-2xl mt-2 text-primaryGray'>Paso {currentStep} de 3</h3>
                                    <div className='flex items-center justify-center w-[700px]'>
                                        <div className={` ${currentStep === 1 ? "h-3 w-3" : "h-2 w-2"} rounded-full bg-primaryGray`} />
                                        <div className={` ${currentStep === 2 ? "h-3 w-3" : "h-2 w-2"} rounded-full mr-[6px] ml-[4px] bg-primaryGray`} />
                                        <div className={` ${currentStep === 3 ? "h-3 w-3" : "h-2 w-2"} rounded-full bg-primaryGray`} />
                                    </div>
                                </section>}
                            <form onSubmit={onSubmit}>
                                {actualStep(currentStep)}
                            </form>
                        </div>
                    </article>
                    {sent ?
                        <section className='flex flex-col items-center justify-center'>
                            <div className='my-8'>
                                <button disabled type="button" className="py-2.5 px-5 me-2 text-normal font-medium text-gray-900 rounded-lg border border-secondaryGray hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin-clockwise animate-duration-1000 animate-iteration-count-infinite dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                    </svg>
                                    Esperando confirmación de cita...
                                </button>
                            </div>
                            <div>
                                <p>Confirma la cita a través del mensaje que se envió a tu correo electrónico.</p>
                                <p>Si no encuentras el mensaje revisa la bandeja de spam.</p>
                                <p>Hasta que no recibas el correo de confirmación con número de cita no se habrá agendado y creado correctamente la cita.</p>
                            </div>

                        </section>

                        : ''}
                </div >
                {currentStep === 4 ? '' : <Footer />}
            </main >
        </>

    )

}
const ScheduleAppointmentWithProvider = () => (
    <StepsProvider>
        <ScheduleAppointment />
    </StepsProvider>
)
export default ScheduleAppointmentWithProvider 