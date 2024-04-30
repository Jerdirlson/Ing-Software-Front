import LoginCard from '../../components/LoginCard.jsx'
import ARROW_TO_BACK from '../../assets/svg/icons/ArrowBack.svg'
/**
 * This section contains the Login 
 * @returns {Component} Login
 */
const Login = () => {
    return (
        <main className="flex items-center justify-center flex-col h-screen  bg-imagen-fondo-login bg-cover" >
            <div className='absolute top-0 left-0 px-4 sm:px-10 py-4'>
                <a href="/">
                    <img src={ARROW_TO_BACK} alt="arrow_to_back" className='w-9 h-9 2xl:w-11 2xl:h-11 hover:scale-110' />
                </a>
            </div>
            <div id="test" className='flex items-center justify-center flex-col h-screen '>
                <LoginCard />
            </div>
            <aside className='flex flex-row justify-items-start mr-auto text-wrap text-xs p-3 text-white'>
                En SaludPro, nos tomamos muy en serio la privacidad y protección de tus  datos personales.
                 Estamos comprometidos en garantizar que tu información se mantenga segura y confidencial en todo momento. 
                 Gracias por confiar en SaludPro para tus necesidades de atención médica y bienestar.
            </aside>
        </main >
    )
}
export default Login


