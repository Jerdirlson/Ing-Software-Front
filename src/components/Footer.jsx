import FACEBOOK_ICON from '../assets/svg/icons/social/facebook.svg'
import INSTAGRAM_ICON from '../assets/svg/icons/social/instagram.svg'
import TWITTER_ICON from '../assets/svg/icons/social/twitter.svg'

/**
 * This component represents the Card that is displayed on the LOGIN section
 * contains 2 inputs and a resolver function
 * @returns {Component} Footer
 */

const Footer = () => {
    return (
        <footer className='w-full bg-gradient-to-b from-aux-1-blue to-aux-2-blue flex text-xs items-center justify-between px-12 lg:px-16 xl:px-24 2xl:px-28 py-4 text-white 2xl:text-sm'>
            <div className='flex flex-col justify-center mx-2 text-justify'>
                <h2 className="mb-2 font-bold">Contacto</h2>
                <ul className="flex flex-col text-nowrap">
                    <li><p>+57 607 578 4980</p>
                    </li>
                    <li><p>+57 607 578 4980</p>
                    </li>
                </ul>

            </div>
            <div className='flex items-center justify-center mx-2 p-2'>servicioalcliente@saludpro.ips.com</div>
            <div className='flex flex-col justify-center mx-2 text-nowrap'>
                <h1 className="font-bold">Sedes</h1>
                <p>Calle 45 No. 55 - 65</p>
                <p>Bucaramanga, Colombia.</p>
            </div>
            <div className='flex flex-col justify-center mx-2 p-2'>
                <p>Edificio Business Plaza, piso 13</p>
                <p>Medellín Distrito Especial de Ciencia, Tecnología</p>

            </div>
            <div className='flex items-center justify-center mx-2 text-nowrap'><ul className="list-disc">
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
            <div className='flex flex-col mx-2 justify-center'>
                <div className='flex items-center justify-center text-nowrap'>
                    <h2 className='font-bold'>Siguenos en nuestras redes</h2>
                </div>
                <div className='mt-1 flex justify-evenly'>
                    <a href="/">
                        <img className='w-5' src={INSTAGRAM_ICON} />
                    </a>
                    <a href="/">
                        <img className='w-5' src={FACEBOOK_ICON} />
                    </a>
                    <a href="/">
                        <img className='w-5' src={TWITTER_ICON} />
                    </a>
                </div>
            </div>
        </footer >
    )
}
export default Footer;