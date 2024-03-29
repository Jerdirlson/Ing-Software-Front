import NavBar from '../components/NavBar.jsx'
import WISIN from "../assets/svg/icons/WisinBlack.svg"
import Footer from '../components/Footer.jsx'

const NotFound = () => {
    return (
        <>
        <NavBar/>
        
            <main className='flex items-center justify-center h-screen w-screen bg-gradient-to-b from-[#fafafa] to-[#E9E9E9]'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-[156px] h-[264px] flex justify-center'> 
                        <img src={WISIN} alt="" className="w-full h-full object-cover"/> 
                    </div>
                    <div className='flex items-center flex-col'>
                        <h1 className='font-bold text-3xl sm:text-5xl'>Página no encontrada</h1>
                        <h2 className='text-2xl font-normal'>Error-404</h2>
                    </div>
                    
                </div>
                
                

            </main></>
        
    )
}
export default NotFound