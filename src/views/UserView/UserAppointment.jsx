import Footer from '../../components/Footer.jsx'
import NavBar from '../../components/NavBar.jsx'
import { Outlet } from "react-router-dom";

const ScheduleAppointment = () => {
    return (
        <>
            <NavBar />
            <main className='h-screen flex flex-col bg-gradient-to-b from-[#FFFFFF] to-[#EFF0F1]'>

                <div className='flex justify-center items-center h-full'>
                    {/* Tarjeta */}
                    <article className='h-[580px] w-[700px] bg-white rounded-[40px] shadow-bigShadow p-10'>
                        <Outlet />
                    </article>

                </div>

                <Footer />
            </main>

        </>
    )
}
export default ScheduleAppointment 