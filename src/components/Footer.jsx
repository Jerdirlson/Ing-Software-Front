/**
 * This component represents the Card that is displayed on the LOGIN section
 * contains 2 inputs and a resolver function
 * @returns {Component} Footer
 */

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-aux-1-blue to-aux-2-blue flex justify-evenly text-sm px-48 py-4 text-white'>
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
    )
}
export default Footer;