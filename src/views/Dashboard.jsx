import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
const Dashboard = () => {
    return (
        <>
            <NavBar />
            {/* 1 SECCIÓN  = LANDING*/}
            <section className='flex items-end justify-center h-screen bg-imagen-fondo-dashboard bg-cover'>
                {/* Elemento en position absolute */}
                <div class="flex flex-col text-wrap absolute top-1/4 left-36 w-80">
                    <h1 class="text-2xl font-bold mb-4">Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </div>

                <div className='bg-blue-500 w-full h-20 flex items-start justify-center'>
                    <article className='bg-white flex justify-between items-center text-black text-wrap p-2 mx-16 rounded-3xl'>
                        <ul className='flex px-10 text-wrap items-center text-sm'>
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
                            <li className='mx-2 '>                            <img src="" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li>
                        </ul>
                    </article>
                </div>
            </section>
            {/* 2 SECCIÓN = SPECIALTIES*/}
            <section>

            </section>
            {/* 3 SECCIÓN */}

            <section>

            </section>
            {/* 4 SECCIÓN */}
            <section>

            </section>
            {/* <h1 className="text-xl text-black p-5"> - THIS IS OUR HOME - ! </h1>
            <Link to="/login">
                <p className='text-purple-800 text-lg underline underline-offset-1'>CLICK HERE TO LOG IN !</p>
            </Link> */}
        </>

    )
}
export default Dashboard