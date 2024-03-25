import NavBar from '../../components/NavBar.jsx'
import NURSE from '../../assets/img/people/nurseServices.png'
import ServiceCard from '../../components/ServiceCard.jsx'
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
                    <div className='bg-black w-1/2 h-1 self-center rounded-full' />

                </section>
                {/* SERVICIOS */}
                <section className='w-full flex justify-center'>
                    <div className='grid grid-cols-3 gap-28 px-48 mt-12'>
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                    <div>

                    </div>


                </section>


            </main>
        </>
    )
}
export default Services