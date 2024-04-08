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

    const { currentStep, finalData, onSubmit } = useSteps()
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

                <div className='flex justify-center items-center h-full '>
                    {/* Tarjeta */}
                    <article className='h-auto w-[700px] bg-white rounded-[40px] shadow-bigShadow p-10 mt-12'>
                        <div>
                            {/* Titulo */}
                            <section className='flex flex-col items-center'>
                                <h1 className='font-bold text-4xl'>Agendamiento de cita</h1>
                                <h3 className='font-light text-2xl mt-2 text-primaryGray'>Paso {currentStep} de 3</h3>
                                {/* Seguimiento de los pasos (Circulos) */}
                                <div className='flex items-center justify-center w-[700px]'>
                                    <div className={` ${currentStep === 1 ? "h-3 w-3" : "h-2 w-2"} rounded-full bg-primaryGray`} />
                                    <div className={` ${currentStep === 2 ? "h-3 w-3" : "h-2 w-2"} rounded-full mr-[6px] ml-[4px] bg-primaryGray`} />
                                    <div className={` ${currentStep === 3 ? "h-3 w-3" : "h-2 w-2"} rounded-full bg-primaryGray`} />
                                </div>
                            </section>
                            {/* <form onSubmit={onSubmit}>
                                <Step1 isDisplay={currentStep === 1 ? true : false} />
                                <Step2 isDisplay={currentStep === 2 ? true : false} />
                                <Step3 isDisplay={currentStep === 3 ? true : false} />
                                {currentStep === 4 ? <button type='submit'><img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img></button> : ''}
                            </form> */}
                            <form onSubmit={onSubmit}>
                                {actualStep(currentStep)}
                            </form>
                        </div>
                    </article>
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