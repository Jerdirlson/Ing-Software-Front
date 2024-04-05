/**
 * Shows info about the appointment
 * @param {title, info, showMore} infoCards
 * @returns {Component} AppoinmenntCard
 */

import { useNavigate } from "react-router-dom"

const AppoinmenntCard = ({ title, info, showMore }) => {
    const navigate = useNavigate()
    
    const onClick =()=>{navigate('/agendamiento/step1')}
    return (
        <article className="flex flex-col flex-wrap w-[302px] h-[365px] rounded-[20px] px-5 pt-8 mr-16 shadow-smallShadow relative 2xl:w-[352px] 2xl:h-[415px]">
            <h2 className="text-3xl mb-8">{title}</h2>
            <p className="mb-10 text-2xl font-light">{info}</p>
            <div>
                {/* REDIRECCIONAR A UN LINK DE GOOGLE DE DIRECCIÓN (MAPS) */}
                <a className="text-xl text-[#4A4A4A] italic hover:text-black hover:underline hover:underline-offset-2 cursor-pointer">
                    ...{showMore}
                </a>
            </div>
            <button onClick={()=>onClick()} className="flex items-center justify-center text-2xl bg-gradient-to-r shadow-[rgba(0,0,0,0.16)_0px_3px_6px]
               from-[#34A192] to-[#3FBA57] text-white absolute bottom-0 left-0 right-0 h-14 rounded-b-xl">Agendar</button>
            
            
        </article>
    )
}
export default AppoinmenntCard