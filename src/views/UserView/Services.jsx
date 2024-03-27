import NavBar from '../../components/NavBar.jsx'
import NURSE from '../../assets/img/people/nurseServices.png'
import ServiceCard from '../../components/ServiceCard.jsx'
import { services } from '../../data/Services.data.js'
import Footer from '../../components/Footer.jsx'
import SERVICES_BACKGROUND from '../../assets/img/backgrounds/ServicesBackground.png'
/**
 * This section contains the services of the app
 * @returns {Component} Services
 */

const Services = () => {
    return (
        <>
            <NavBar />
            <main className="h-screen flex flex-col ">
                <section className='flex justify-center items-center w-full h-64 mt-36'>
                    {/* Rectangulo azul */}
                    <article className='flex bg-blue-500 h-60 w-[950px] rounded-[60px] p-5 bg-gradient-to-r from-[#46A8FB] to-[#2176FF]'>
                        <div className='w-[550px] mt-5 ml-9'>
                            <h1 className='font-bold text-white text-3xl'>
                                Servicios
                            </h1>
                            <p className='text-white text-xl'>
                                SaludPRO IPS, se permite ofrecerles a los afiliados del régimen contributivo y subsidiado,
                                servicios del Plan Obligatorio de Salud de la ley 100, en el nivel I, II y III de atención ambulatoria.
                            </p>
                        </div>

                        <aside className='relative w-[400px] h-auto'>
                            <div className='w-64 h-64 absolute translate-x-9 -translate-y-9'>
                                <img className='h-full w-full object-cover' src={NURSE} alt="una eñora" />
                            </div>
                        </aside>

                    </article>
                    {/* Texto complementario */}
                    <div className='w-96 ml-20 text-xl font-light flex items-center'>
                        <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                            rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                        </p>
                    </div>

                </section>
                <section className='w-full h-32 mt-20 flex justify-center flex-col'>
                    <h1 className='text-3xl text-center mb-6'>
                        Consultas<br />
                        <strong className='text-4xl'>Especializadas</strong>
                    </h1>
                    {/* hr */}
                    <div className='bg-black w-1/2 h-0.5 self-center rounded-full' />

                </section>
                {/* SERVICIOS */}
                <section className='w-full flex flex-col justify-center mx-auto'>
                    <div className='grid grid-cols-3 gap-x-44 mx-auto mt-12'>
                        {Object.keys(services).map(key => (
                            <ServiceCard
                                key={key}
                                title={services[key].title}
                                summary={services[key].description}
                                img={services[key].imgRelated}
                            />
                        ))}
                    </div>

                    <section >
                        <div className='w-full'>
                            <img className="w-full h-full object-contain" src={SERVICES_BACKGROUND} alt="Doctor Smiling" />
                        </div>
                        <h1 className='px-40 py-14'>Donec vitae sapien ut libero venenatis faucibus.
                            Nullam quis ante. Etiam sit amet orci eget eros
                            faucibus tincidunt. Duis leo. Sed fringilla
                            mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</h1>
                    </section>
                </section>

                <Footer />

            </main>
        </>
    )
}
export default Services