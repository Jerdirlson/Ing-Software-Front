import LoginCard from '../components/LoginCard.jsx'
import ARROW_TO_BACK from '../assets/svg/ArrowBack.svg'
const Login = () => {
    return (
        <main className="flex items-center justify-center flex-col h-screen  bg-imagen-fondo-login bg-cover" >
            <div className='absolute top-0 left-0 px-10 py-4'>
                <a href="/">
                    <img src={ARROW_TO_BACK} alt="arrow_to_back" className='w-11 h-11 hover:size-12' />
                </a>
            </div>
            <div id="test" className='flex items-center justify-center flex-col h-screen '>
                <LoginCard />
            </div>
            <aside className='flex flex-row justify-items-start mr-auto text-wrap text-xs p-3 text-white'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </aside>
        </main >
    )
}
export default Login


