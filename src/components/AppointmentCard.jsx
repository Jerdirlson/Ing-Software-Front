/**
 * Shows info about the appointment
 * @param {title, info, showMore} infoCards
 * @returns {Component} AppoinmenntCard
 */

import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const AppoinmenntCard = ({ title, info, showMore,action, citaType }) => {
    const { userLogin } = useAuth()
    const navigate = useNavigate()

    const onClick = (citaType) => {
        // !userLogin ? navigate('/login') : navigate('/agendamiento')
        switch (citaType) {
            case 'Schedule':
                navigate('/agendamiento')   
                break
            case 'Re-Schedule':
                navigate('/reagendar')  // => Re-Schedule
                break
            case 'Delete':
                navigate('/cancelar') // => Delete
                break
            default:
                navigate('/')
        }
    }
    return (
        <article className="flex flex-col flex-wrap w-[302px] h-auto rounded-[20px] mb-10 sm:mb-0 px-5 pt-8 sm:mr-8 xl:mr-16 shadow-smallShadow relative 2xl:w-[352px]">

            <h2 className={`${citaType !== 'Schedule' ? "mb-4" : "mb-8"} text-3xl`}>{title}</h2>

            <div className="flex flex-col justify-between pb-20">
                {/* REDIRECCIONAR A UN LINK DE GOOGLE DE DIRECCIÓN (MAPS) */}
                {info ?
                    <>
                        <p className="text-2xl font-light mb-6">{info}</p>
                        <div>
                            <a className="text-xl text-[#4A4A4A] italic hover:text-black hover:underline hover:underline-offset-2 cursor-pointer">
                                ...{showMore}
                            </a>
                        </div>
                    </>
                    : ''}
            </div>


            <button onClick={() => onClick(citaType)} className={`${citaType !== 'Delete' ? "bg-gradient-to-r from-[#34A192] to-[#3FBA57]":"bg-gradient-to-r from-[#cf2222] to-[#ad5858]"} flex items-center justify-center text-2xl  shadow-[rgba(0,0,0,0.16)_0px_3px_6px]      
             text-white absolute bottom-0 left-0 right-0 h-14 rounded-b-xl`}>{action}</button>


        </article >
    )
}
export default AppoinmenntCard