import AppoinmenntCard from "../components/AppointmentCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

/**
 * This section contains the 'appointments' 
 * Add - Delete - Edit  an appointment 
 * @returns {Comment} Appointments
 */
const Appointments = () => {
    return (
        <>
            <NavBar />
            <main className="h-screen flex flex-col items-center justify-center">
                <section className="w-full">
                    <div className="px-48 text-black ">
                        <h2 className=" font-bold text-xl mb-2">Atención</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                </section>
                <div className="bg-blue-500 w-2/5 h-12 my-8 flex self-start rounded-r-3xl"></div>
                <section>
                    <AppoinmenntCard/>
                </section>
                <aside>

                </aside>
            </main>
            <Footer />
        </>

    )
}
export default Appointments