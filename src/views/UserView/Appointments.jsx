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
    const Domicilio = {
        title: 'Citas a Domicilio',
        info: 'Agenda tus citas de forma personalizada para que seas atendido en la comodidad de tu hogar, elige la fecha y hora que mejor necesites',
        link: 'Ver Condiciones'
    }
    return (
        <>
            <NavBar />
            <main className="h-[940px] flex flex-col items-center justify-center 2xl:h-screen">
                <section className="w-full">
                    <div className="px-48 text-black hidden text-xs md:block">
                        <h2 className=" font-normal text-2xl mb-2 2xl:text-4xl">Atención</h2>
                        <p className="font-light text-lg 2xl:text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </section>
                <div className="bg-blue-500 w-[570px] h-14 my-12 flex self-start rounded-r-3xl items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Agenda tu cita</h1>
                </div>
                <section className="flex w-full relative ">
                    <div className="flex pl-12 lg:pl-48">
                        <AppoinmenntCard title={Presenciales.title} info={Presenciales.info} showMore={Presenciales.link} />
                        <AppoinmenntCard title={Domicilio.title} info={Domicilio.info} showMore={Domicilio.link} />
                    </div>
                    <div className="absolute right-0 bottom-0  translate-y-6 bg-gradient-to-l from-transparent from-35% to-white to-95% 3xl:w-[800px] 3xl:h-[550px] xl:w-96 xl:h-96 hidden 3xl:block xl:block"></div>
                    <div className="absolute right-0 bottom-0  translate-y-6 -z-10 3xl:w-[800px] 3xl:h-[550px] xl:w-96 xl:h-96 hidden 3xl:block xl:block">
                        <img src={DOCTOR_EJEMPLO} alt="" className="w-full h-full object-cover" />
                    </div>

                </section>
            </main>
            <Footer />
        </>

    )
}
export default Appointments