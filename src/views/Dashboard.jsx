import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import ABOUT_US_NURSE from '../assets/img/people/nurse.png'
import OUR_PLACES_1 from '../assets/img/others/lugar1.jpeg'
import OUR_PLACES_2 from '../assets/img/others/lugar2.jpg'
const Dashboard = () => {
    return (
        <>
            <NavBar />
            {/* 1 SECCIÓN  = LANDING*/}
            <main className='flex items-end justify-center h-screen bg-imagen-fondo-dashboard bg-cover'>
                {/* Elemento en position absolute */}
                <div className="flex flex-col text-wrap absolute top-1/4 left-36 w-80">
                    <h1 className="text-2xl font-bold mb-4">Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </div>

                <div className='bg-blue-500 w-full h-15 flex items-start justify-center'>
                    <article className='bg-white flex justify-between items-center text-black text-wrap px-2 py-4 mx-20 rounded-3xl -translate-y-4 xl:-translate-y-8'>
                        <ul className='flex px-10 text-pretty items-center text-sm'>
                            <li className='mx-2 mr-8'>
                                <h1 className='text-xl font-bold'>Servicios
                                </h1></li>
                            <li className='mx-2 '>                            <img src="" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='mx-2 '>                            <img src="" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='mx-2 '>                            <img src="" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='mx-2 '>                            <img src="" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                            <li className='mx-2'>                            <img src="" alt="" />
                                <p className='italic'>Conocer más</p></li>
                        </ul>
                    </article>
                </div>
            </main >
            {/* 2 SECCIÓN = SPECIALTIES*/}

            <section className='bg-white px-48 py-24'>
                <div className='flex justify-center'>
                    <h1 className='font-bold text-black text-4xl'>Especialidaes</h1>
                </div>
                <div className='flex justify-between items-center'>
                    {/* COMPONENTES DE ESPECIALIDADES */}
                </div>
                <div className='mt-24'>
                    <p className='text-lg text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>

                </div>
            </section>
            {/* 3 SECCIÓN = OUR PLACES */}

            <section className='bg-blue-700'>
                <div className='flex justify-evenly px-48 py-24'>

                    <aside className='flex justify-center items-center p-8 mr-4'>
                        <figure className='rounded-full  w-56 h-56 translate-x-6 -translate-y-6 overflow-hidden'>
                            <img src={OUR_PLACES_1} alt="" className='w-full h-full object-cover'/>
                        </figure>

                        <figure className='rounded-full bg-red-950 w-56 h-56 translate-x-0 translate-y-6 overflow-hidden'>
                            <img src={OUR_PLACES_2} alt="" className='w-full h-full object-cover' />
                        </figure>
                    </aside>
                    <div className='p-8 max-w-3xl'>
                        <h1 className='font-bold text-3xl mb-3'>Ubica nuestras sedes</h1>
                        <p className='mb-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <p className=''>
                            parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
                        </p>

                    </div>
                </div>
            </section>
            {/* 4 SECCIÓN = ABOUT US*/}
            <section className='flex items-center justify-evenly px-48 pt-24'>
                <figure className='flex items-center justify-center max-w-60'>
                    <img src={ABOUT_US_NURSE} alt="" className='w-full h-full object-cover' />
                </figure>

                <div className='text-black p-8 text-pretty max-w-md'>
                    <h1 className='font-bold text-3xl mb-6'>Sobre nosotros</h1>
                    <p className='text-sm'>Brindamos servicios de atención médica domiciliaria,
                        con un equipo interdisciplinario, calificado,
                        capacitado para ofrecer una atención segura,
                        oportuna, eficiente y de calidad humana, utilizando la tecnología adecuada,
                        la mejora continua de los procesos y
                        la promoción del autocuidado y la participación familiar.</p>
                </div>

                <div className='text-black p-2 text-pretty max-w-md'>
                    <p className='text-sm mt-10'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim.</p>

                </div>
            </section>
            <div className='bg-blue-500 h-12 w-full'></div>
            {/* 5 SECCIÓN = ATENTION HOURS*/}
            <section className='text-black flex items-center justify-center flex-col px-48 py-24'>
                <div className='mb-6'>
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                </div>
                <div className='flex justify-between'>
                    <aside className='p-4 flex items-center justify-center drop-shadow-2xl'>
                        <img src="https://i.pinimg.com/736x/5a/bb/96/5abb962bae8cc442727530197459a76d.jpg" alt="" />
                    </aside>
                    <div className='p-4 flex justify-center flex-col max-w-5xl text-pretty'>
                        <h1 className='font-bold text-black text-2xl'>
                            Horarios de atención
                        </h1>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p className='mb-6'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p>
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                            pede mollis pretium. Integer tincidunt.
                            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className='bg-blue-500 w-screen flex justify-evenly text-sm px-48 py-4 text-nowrap'>
                <div className='flex flex-col justify-center mx-2 text-justify'>
                    <h2>Contacto</h2>
                    <ul>
                        <li><p>+57 607 578 4980</p>
                        </li>
                        <li><p>+57 607 578 4980</p>
                        </li>
                    </ul>

                </div>
                <div className='flex items-center justify-center mx-2 p-2'>servicioalcliente@saludpro.ips.com</div>
                <div className='flex flex-col justify-center mx-2'>
                    <h1 >Sedes</h1>
                    <p>Calle 45 No. 55 - 65</p>
                    <p>Bucaramanga, Colombia.</p>
                </div>
                <div className='flex flex-col justify-center mx-2 p-2 text-justify'>
                    <p>Edificio Business Plaza, piso 13</p>
                    <p>Medellín Distrito Especial de Ciencia, Tecnología</p>

                </div>
                <div className='flex flex-col justify-center mx-2'><h1>Sedes</h1>
                    <p> Calle 45 No. 55 - 65</p>
                    <p>Bucaramanga, Colombia.</p>
                </div>
                <div className='flex flex-col justify-center mx-2 p-2 text-justify'>
                    <p>Edificio Business Plaza, piso 13</p>
                    <p>Medellín Distrito Especial de Ciencia, Tecnología</p>

                </div>
                <div className='flex items-center justify-center mx-2'><ul>
                    <li>
                        <p>Horarios de atención.</p>
                    </li>
                    <li>
                        <p>Buzón de reclamos.</p>
                    </li>
                    <li>
                        <p>Políticas de privacidad.</p>
                    </li>
                    <li>
                        <p>Términos y condiciones.</p>
                    </li>

                </ul></div>
                <div className='flex items-center justify-center mx-2'>
                    <div>
                        <h2 className='font-bold'>Siguenos en nuestras redes sociales</h2>
                    </div>
                    <div className='flex justify-between'>
                        <i className='mr-3 p-1'></i>
                        <i className='mr-3 p-1'></i>
                        <i className='mr-3 p-1'></i>
                        <i className='mr-3 p-1'></i>
                    </div>


                </div>

            </footer>
        </>

    )
}
export default Dashboard