import CHRISTIAN from '../assets/img/christian.jpg'
/**
 * Shows the info of the services provided
 * @returns {Component} ServiceCard
 */

const ServiceCard = ({ title, summary, img }) => {
    return (
        <article className="relative flex w-44 h-auto flex-col 2xl:w-72 xl:w-60 lg:w-52">
            <div className="h-44 2xl:h-72 xl:h-60 lg:h-52 w-full">
                <img src={CHRISTIAN} className="h-full w-full object-cover rounded-xl   " />
            </div>
            <div className="h-auto mx-2 px-4 py-10 -translate-y-10 flex flex-col items-center justify-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md text-sm 2xl:text-xl xl:text-lg lg:text-base">
                <h1 className='text-[#0B2D64] font-bold'>{title}</h1>
                <p>{summary}</p>
            </div>
        </article>
    )
}
export default ServiceCard