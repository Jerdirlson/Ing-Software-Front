import { useNavigate } from "react-router-dom";

/**
 * Shows the info of the services provided
 * @returns {Component} ServiceCard
 */

const ServiceCard = ({ title, summary, img }) => {
    const navigate = useNavigate()
    const handleService = (service) => {
        navigate("/agendamiento", { state: { service } });
    }
    return (
        <article className="relative flex h-auto flex-col w-40 2xl:w-72 xl:w-60 lg:w-52 sm:w-48">
            <div className="h-40 2xl:h-72 xl:h-60 lg:h-52 sm:h-48 w-full">
                <img src={img} className="h-full w-full object-cover rounded-xl   " />
            </div>
            <div onClick={() => handleService(title)} className='relative group duration 500 overflow-hidden cursor-pointer group h-auto mx-2 px-4 py-10 -translate-y-10 flex flex-col items-center justify-center rounded-xl bg-white bg-clip-border text-gray-700  hover:duration-700 duration-700 shadow-md text-sm 2xl:text-xl xl:text-lg lg:text-base' >
                <div className='flex flex-col items-center' >
                    <h1 className='text-[#0B2D64] font-bold'>{title}</h1>
                    <p className='hidden sm:block'>{summary}</p>
                </div>
                <div className="absolute -z-10 bg-[#C0F723] -bottom-full h-full w-full p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500" />
            </div>


        </article>
    )
}
export default ServiceCard