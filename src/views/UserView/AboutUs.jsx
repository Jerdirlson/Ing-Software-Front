import DOCTOR_CHECKING from '../../assets/img/people/DoctorCheck.png'
import SERVICES_BACKGROUND from '../../assets/img/backgrounds/ServicesBackground.png'
import { aboutUs } from '../../data/AboutUs.data'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useState } from 'react'

/**
 * This section contains the information about the IPS 
 * @returns {Component} AboutUs
 */
const AboutUs = () => {
    const [info, setInfo] = useState(null)
    const [activeButton, setActiveButton] = useState('')


    const handleInfo = (option) => {
        setInfo(aboutUs[option]);
        setActiveButton(option);

        console.log(info)
    };
    return (
        <>
            <NavBar />
            <div className='flex flex-col'>
                <main className="flex flex-col px-48 pt-32 text-2xl justify-center items-center">
                    <section className="flex justify-center ">
                        <div className='mr-16'>
                            <img className="h-full w-full object-cover" src={DOCTOR_CHECKING} alt="" />
                        </div>
                        <div className="w-1/2  font-light px-6 py-2 text-pretty">
                            <h1 className='font-bold text-3xl'>Quienes somos</h1>
                            <p>Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo,
                                rhoncus ut, imperdiet a, venenatis vitae,
                                justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                            </p>
                            <p>
                                Brindamos servicios de atención médica domiciliaria,
                                con un equipo interdisciplinario, calificado, capacitado
                                para ofrecer una atención segura, oportuna, eficiente y de calidad humana,
                                utilizando la tecnología adecuada, la mejora continua de los procesos y
                                la promoción del autocuidado y la participación familiar.
                            </p>
                        </div>
                    </section>
                    <section className="flex justify-center mt-20 font-light">
                        <div className='flex flex-col w-1/2 mr-32 text-pretty'>
                            <h1 className='font-bold text-3xl mb-2'>
                                Transparencia
                            </h1>
                            <div className='overflow-hidden'>
                                <p>
                                    !Estamos para escucharte!
                                </p>
                                <p>
                                    Línea de transparencia:
                                </p>
                                <p >
                                    <a href='#' className='font-bold '>notificacionesyquejas@saludpro.ips.com
                                    </a>
                                </p>

                                <p className='mt-6'>
                                    Un canal donde pueden informar de manera anónima actos
                                    incorrectos en la empresa. Tales como:
                                </p>
                                <p>
                                    Revelación de información confidencial, fraude, conflicto de interés,
                                    hurto u otros comportamientos irregulares
                                </p>
                            </div>

                        </div>
                        <div className='flex flex-col w-1/2 text-pretty'>
                            <h1 className='font-bold text-3xl'>
                                Valores
                            </h1>
                            <ul className='list-disc'>
                                <li>Feugiat a, tellus.
                                </li>
                                <li>Phasellus viverra nulla ut metus varius
                                </li>
                                <li>laoreet. Quisque rutrum.
                                </li>
                                <li>Aenean imperdiet. </li>
                                <li>Etiam ultricies nisi vel augue. Curabitur
                                </li>
                                <li> Nam eget dui. </li>
                            </ul>

                        </div>
                    </section>
                </main>
                {/* HR */}
                <div className='bg-black w-10/12 h-0.5 self-center rounded-full mt-44 mb-20' />

                <section className="flex flex-col items-center">
                    <div className='flex p-10'>
                        <button className={`overflow-hidden rounded-full w-32 h-32 mx-20 ${activeButton === "mision" ? "scale-110 shadow-2xl" : ""}`} onClick={() => handleInfo("mision")}>
                            <img className="w-full h-full object-cover" src="https://i.pinimg.com/564x/21/66/09/21660951a46544a515b183040acb502c.jpg" alt="" />
                        </button>
                        <button className={`overflow-hidden rounded-full w-32 h-32 mx-20 ${activeButton === "vision" ? "scale-110 shadow-2xl" : ""}`} onClick={() => handleInfo("vision")}>
                            <img className="w-full h-full object-cover" src="https://i.pinimg.com/564x/29/71/c9/2971c9b35bfcca2a03dac13800e51e93.jpg" alt="" />
                        </button>
                        <button className={`overflow-hidden rounded-full w-32 h-32 mx-20 ${activeButton === "objetivo" ? "scale-110 shadow-2xl" : ""}`} onClick={() => handleInfo("objetivo")}>
                            <img className="w-full h-full object-cover" src="https://i.pinimg.com/564x/61/2c/09/612c099e01825c92e48182b807643ba5.jpg" alt="" />
                        </button>
                    </div>
                    <div className='mt-6 mb-24'>
                        <p className='px-64 h-24'>
                            {
                                info ? info.description : 'Haz click en las imagenes para ver información'
                            }
                        </p>
                    </div>
                </section>


                <section >
                    <div className='w-full'>
                        <img className="w-full h-full object-contain" src={SERVICES_BACKGROUND} alt="Doctor Smiling" />
                    </div>
                    <h1 className='px-40 py-14'>Donec vitae sapien ut libero venenatis faucibus.
                        Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla
                        mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</h1>
                </section>
            </div>
            <Footer />
        </>


    )
}
export default AboutUs
