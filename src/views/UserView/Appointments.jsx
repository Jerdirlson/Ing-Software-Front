import AppoinmenntCard from "../../components/AppointmentCard"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import DOCTOR_EJEMPLO from "../../assets/img/people/doctorCita.png"
/**
 * This section contains the 'appointments' 
 * Add - Delete - Edit  an appointment 
 * @returns {Comment} Appointments
 */
const Appointments = () => {

    const Presenciales = {
        title: 'Citas Presenciales',
        info: 'Agenda tus citas para ser atendido de forma presencial en nuestras instalaciones, elige la fecha y hora que mejor se adapte a ti',
        link: 'Ver Ubicación'
    }
    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center justify-center h-screen mt-52 mb-12 md:my-14 lg:mt-28 lg:mb-40 2xl:my-0 ">
                <section className="w-full h-auto">
                    <div className="px-24 lg:px-48 xl:mt-24 text-black hidden text-xs md:block">
                        <h2 className=" font-normal text-2xl mb-2 2xl:text-4xl">Atención</h2>
                        <p className="font-light text-lg 2xl:text-2xl">
                            Entendemos lo importante que es contar con un sistema de citas médicas eficiente y conveniente. 
                            Nuestro servicio de citas está diseñado para ofrecerte una experiencia sin complicaciones, permitiéndote programar 
                            fácilmente tus consultas con nuestros profesionales de la salud en línea o por teléfono. Ya sea que necesites una consulta 
                            de seguimiento, un chequeo de rutina o un tratamiento especializado, nuestro equipo está listo para atenderte.
                        </p>
                    </div>
                </section>
                <div className="bg-blue-500 w-11/12 md:w-5/6 lg:w-5/12 h-auto py-2 my-12 flex self-start rounded-r-3xl items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Agenda tu cita</h1>
                </div>
                <section className="flex w-full h-fit relative mb-24 md:mb-0 lg:my-0">
                    <div className="flex flex-col mx-auto sm:mx-0 sm:flex-row sm:pl-12 lg:pl-48">
                        <AppoinmenntCard title={Presenciales.title} info={Presenciales.info} showMore={Presenciales.link} citaType={'Schedule'} action={'Agendar'} />
                        <div className="flex flex-col justify-between">
                            <AppoinmenntCard title={'Reagendación de Citas'} citaType={'Re-Schedule'} action={'Re-Agendar'} />
                            <AppoinmenntCard title={'Cancelación'} citaType={'Delete'} action={'Cancelar'} />
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 translate-y-6 bg-gradient-to-l from-transparent from-35% to-white to-95% 3xl:w-[800px] 3xl:h-[550px] xl:w-96 xl:h-96 hidden 3xl:block xl:block"></div>
                    <div className="absolute right-0 bottom-0 translate-y-6 -z-10 3xl:w-[800px] 3xl:h-[550px] xl:w-96 xl:h-96 hidden 3xl:block xl:block">
                        <img src={DOCTOR_EJEMPLO} alt="" className="w-full h-full object-cover" />
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}
export default Appointments