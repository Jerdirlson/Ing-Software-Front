import DOCTOR_CHECKING from '../../assets/img/people/DoctorCheck.png'
import SERVICES_BACKGROUND from '../../assets/img/backgrounds/ServicesBackground.png'
import { aboutUs } from '../../data/AboutUs.data'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

/**
 * This section contains the information about the IPS 
 * @returns {Component} AboutUs
 */
const AboutUs = () => {
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
                <div className='bg-black w-10/12 h-0.5 self-center rounded-full my-44' />

                <section className="flex flex-col ">
                    <div className='flex'>
                        <button className='rounded-full'><img src="" alt="" /></button>
                        <button className='rounded-full'><img src="" alt="" /></button>
                        <button className='rounded-full'><img src="" alt="" /></button>
                    </div>
                    <div className=''>
                        {
                        }
                        Gestionar el riesgo de los usuarios buscando intervenirlo para mejorar su salud y calidad de vida.
                        Brindar a los usuarios y grupos de interés experiencias que los hagan sentir cuidados.
                        Mejorar continuamente, lograr solidez y crecimiento organizacional.
                        Aportar a los aseguradores para su estabilidad y crecimiento.
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
