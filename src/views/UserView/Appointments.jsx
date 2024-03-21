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
            <main className="h-screen flex flex-col items-center justify-center lg:h-[940px]">
                <section className="w-full">
                    <div className="px-48 text-black ">
                        <h2 className=" font-normal text-4xl mb-2">Atención</h2>
                        <p className="font-light text-2xl">
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
                <section className="flex w-full relative">
                    <div className="flex pl-48">
                        <AppoinmenntCard title={Presenciales.title} info={Presenciales.info} showMore={Presenciales.link} />
                        <AppoinmenntCard title={Domicilio.title} info={Domicilio.info} showMore={Domicilio.link} />
                    </div>
                    <div className="absolute right-0 bottom-0 w-[800px] h-[550px] translate-y-6 bg-gradient-to-l from-transparent from-35% to-white to-95% lg:w-96 lg:h-96"></div>
                    <div className="absolute right-0 bottom-0 w-[800px] h-[550px] translate-y-6 -z-10 lg:w-96 lg:h-96">
                        <img src={DOCTOR_EJEMPLO} alt="" className="w-full h-full object-cover" />
                    </div>

                </section>
            </main>
            <Footer />
        </>

    )
}
export default Appointments