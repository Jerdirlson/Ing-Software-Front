import NavBar from '../../components/NavBar.jsx'
import ABOUT_US_NURSE from '../../assets/img/people/nurse.png'
import OUR_PLACES_1 from '../../assets/img/others/lugar1.jpeg'
import OUR_PLACES_2 from '../../assets/img/others/lugar2.jpg'
import BLOOD_ICON from '../../assets/img/icons/blood_icon.png'
import HOSPITAL_ICON from '../../assets/img/icons/hospital_bed.png'
import STETHOSCOPE_ICON from '../../assets/img/icons/stethoscope.png'
import SYRINGE_ICON from '../../assets/img/icons/syringe.png'
import SYRINGE_IMAGE from '../../assets/img/others/inyeccion.png'
import Footer from '../../components/Footer.jsx'
import BLUE_DIVISION from '../../assets/svg/others/BlueDivision.svg'
import ServiceCard from '../../components/ServiceCard.jsx'
import { services } from '../../data/Services.data.js'

/**
 * This section contains tha main page
 * @returns {Component} Dashboard
 */
const Dashboard = () => {
    return (
        <>
            <NavBar />
            {/* 1 SECCIÓN  = LANDING*/}
            <main className='flex flex-col items-end justify-center h-64 mt-16 bg-imagen-fondo-dashboard-movil sm:flex-row sm:h-screen xl:m-0 xl:bg-imagen-fondo-dashboard-pc bg-cover '>
                {/* Elemento en position absolute */}
                <div className="flex flex-col  text-wrap w-full px-4 pt-64 mb-12 text-white sm:p-0 sm:m-0 sm:absolute sm:top-1/4 sm:left-36 sm:w-80">
                    <h1 className="font-bold text-xl mb-1 sm:text-2xl sm:mb-4">Lorem ipsum</h1>
                    <p className='text-sm sm:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p className='hidden sm:block'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </div>
                <div className='bg-gradient-to-b from-secondary-blue to-primary-blue w-full flex items-center justify-center sm:p-0 sm:items-start sm:justify-center sm:m-0'>
                    <article className='bg-white flex justify-between items-center py-4 mx-6 rounded-3xl -translate-y-4 sm:px-2 sm:mx-20 xl:-translate-y-8'>
                        <ul className='flex flex-col px-10 text-pretty items-center text-sm sm:flex-row'>
                            <li className='mx-2 mr-4 2xl:p-1 2xl:mr-16'>
                                <h1 className='text-xl font-bold'>Servicios</h1>
                            </li>
                            <li className='flex items-center mx-2 p-2 sm:p-0 2xl:mx-1 2xl:p-1'>                            <img src={BLOOD_ICON} alt="tipo_de_sangre_icon" className='w-10 h-10 mr-4' />
                                <p className='2xl:text-base xl:text-xs sm:hidden lg:block '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='hidden sm:flex sm:items-center sm:mx-2 p-2 sm:p-0 2xl:mx-1 2xl:p-1'>                            <img src={HOSPITAL_ICON} alt="hospital_icon" className='hidden sm:block w-10 h-10 sm:mr-4' />
                                <p className='2xl:text-base xl:text-xs sm:hidden lg:block '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='flex items-center mx-2 p-2 sm:p-0 2xl:mx-1 2xl:p-1'>                            <img src={STETHOSCOPE_ICON} alt="stethoscope_icon" className='w-10 h-10 mr-4' />
                                <p className='2xl:text-base xl:text-xs sm:hidden lg:block '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='flex items-center mx-2 p-2 sm:p-0 2xl:mx-1 2xl:p-1'>                            <img src={SYRINGE_ICON} alt="syringe_icon" className='w-10 h-10 mr-4' />
                                <p className='2xl:text-base xl:text-xs sm:hidden lg:block '>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='mx-2 2xl:mx-1 2xl:p-1'>
                                <a href="/servicios" className='hover:underline hover:decoration-black' >
                                    <p className='italic text-base 2xl:text-base sm:text-xs'>Conocer más...</p>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </main >
            {/* 2 SECCIÓN = SPECIALTIES*/}

            <section className='bg-white mt-44 px-28 py-12 pb-0 sm:pb-12 sm:m-0 lg:px-24 2xl:px-48'>
                <div className='flex justify-center mb-12'>
                    <h1 className='font-bold text-4xl'>Especialidades</h1>
                </div>
                
                <div className='hidden sm:grid sm:grid-flow-col sm:grid-rows-2 sm:justify-evenly 2xl:flex 2xl:justify-between  '>
                    
                    {Object.keys(services).slice(0, 4).map(key => (
                        <ServiceCard
                            key={key}
                            title={services[key].title}
                            summary={services[key].description}
                            img={services[key].imgRelated}
                        />
                    ))}
                </div>
                <div className='flex flex-col w-full items-center sm:hidden'>
                    {Object.keys(services).slice(0, 2).map(key => (
                        <ServiceCard
                            key={key}
                            title={services[key].title}
                            summary={services[key].description}
                            img={services[key].imgRelated}
                        />
                    ))}
                </div>
                <div className='hidden sm:block lg:mt-12'>
                    <p className='text-lg text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>

                </div>
            </section>
            {/* 3 SECCIÓN = OUR PLACES */}

            <section className='bg-secondary-blue text-white'>
                <div className='flex flex-row items-center justify-center py-12 sm:justify-evenly sm:flex-col lg:flex-row sm:px-2 md:px-4 lg:px-6 xl:px-8 '>

                    <aside className='flex justify-center items-center pb-12 -mr-12 sm:m-0 sm:mr-4 sm:p-8 2xl:mr-0'>
                        <figure className='rounded-full  w-28 h-28   sm:translate-x-12 sm:-translate-y-14 overflow-hidden sm:w-64 sm:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96'>
                            <img src={OUR_PLACES_1} alt="" className='w-full h-full object-cover' />
                        </figure>

                        <figure className='rounded-full bg-red-950 w-28 h-28 -translate-x-20 translate-y-16 sm:translate-x-0 sm:translate-y-14 overflow-hidden sm:w-64 sm:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96'>
                            <img src={OUR_PLACES_2} alt="" className='w-full h-full object-cover' />
                        </figure>
                    </aside>
                    <div className=' flex flex-col text-pretty w-1/2 mr-2 sm:w-auto sm:m-0 sm:px-8 max-w-2xl md:px-2 2xl:px-0'>
                        <h1 className='font-bold text-xl mb-3 2xl:text-3xl xl:text-2xl'>Ubica nuestras sedes</h1>
                        <p className='mb-6 hidden 2xl:text-base sm:text-sm sm:block'> Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. </p>
                        <p className='mb-6 text-sm 2xl:text-base'>
                            Parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
                        </p>
                        <p className='mb-6 text-sm 2xl:text-base'>
                            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                        </p>
                    </div>
                </div>
            </section>
            {/* 4 SECCIÓN = ABOUT US*/}
            <section className='flex items-center sm:justify-evenly pt-12 sm:px-48  xl:px-36'>
                <figure className='flex items-center justify-center lg:w-60 '>
                    <img src={ABOUT_US_NURSE} alt="" className='w-full h-full object-cover' />
                </figure>
                <div className='flex flex-col px-1 lg:items-center lg:px-4 lg:flex-row sm:justify-evenly '>
                    <div className='text-black lg:p-8 text-pretty lg:max-w-md '>
                        <h1 className='font-bold lg:text-3xl lg:mb-6 '>Sobre nosotros</h1>
                        <p className='text-sm 2xl:text-base hidden lg:block'>Brindamos servicios de atención médica domiciliaria,
                            con un equipo interdisciplinario, calificado,
                            capacitado para ofrecer una atención segura,
                            oportuna, eficiente y de calidad humana, utilizando la tecnología adecuada,
                            la mejora continua de los procesos y
                            la promoción del autocuidado y la participación familiar.</p>
                    </div>

                    <div className='text-black p-2 text-pretty max-w-md hidden lg:block'>
                        <p className='text-sm mt-10 2xl:text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <div className='flex flex-col items-center text-sm lg:hidden p-1'>
                        <p>Estamos enfocados a ofrecer la mejor calidad de servicio.
                            Conoce nuestros principios y objetivos como IPS.</p>
                        <a className="hover:underline hover:decoration-black mt-2 self-start" href="/nosotros">
                            <p>Saber más...</p>
                        </a>
                    </div>
                </div>

            </section>

            <div className='-translate-y-5 sm:-translate-y-8 md:-translate-y-12 lg:-translate-y-16 xl:-translate-y-10 2xl:-translate-y-12'><img src={BLUE_DIVISION} alt="" /></div>

            {/* 5 SECCIÓN = ATENTION HOURS*/}
            <section className='text-black flex items-center justify-center flex-col px-8 py-4 md:px-24 md:py-12 lg:px-48 lg:py-24 lg:pt-8 lg:pb-20'>
                <div className='hidden sm:mb-6 sm:block'>
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                </div>
                <div className='flex justify-between items-center'>
                    <aside className=' flex items-center justify-center drop-shadow-2xl w-full h-56 p-1 sm:p-4 sm:h-auto sm:w-[500px] '>
                        <img src={SYRINGE_IMAGE} alt="" className='w-full h-full object-cover' />
                    </aside>
                    <div className='p-4 flex justify-center flex-col text-pretty'>
                        <h1 className='font-medium text-black text-xl 2xl:text-2xl'>
                            Horarios de atención
                        </h1>
                        <p className='mb-6 text-xs xl:text-sm 2xl:text-base'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p className='mb-6 text-xs xl:text-sm 2xl:text-base'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p className='text-xs hidden md:block xl:text-sm 2xl:text-base'>
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                            pede mollis pretium. Integer tincidunt.
                            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                        </p>
                    </div>

                </div>
                <p className='py-2 text-xs md:hidden'>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                    aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                    imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                    pede mollis pretium. Integer tincidunt.
                    Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                </p>
            </section>

            {/* FOOTER */}
            <Footer />
        </>

    )
}
export default Dashboard