import CHRISTIAN from '../assets/img/christian.jpg'
/**
 * Shows the info of the services provided
 * @returns {Component} ServiceCard
 */

const ServiceCard = ({ title, summary, img }) => {
    return (
        <article class="relative flex w-48 h-auto flex-col 2xl:w-80 xl:w-64 lg:w-56">
            <div className="h-72 w-full">
                <img src={CHRISTIAN} className="h-full w-full object-cover rounded-xl   " />
            </div>
            <div className="h-full mx-4 px-8 py-10 -translate-y-8 flex flex-col items-center justify-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md text-xl">
                <h1 className='text-[#0B2D64] font-bold'>Fisioteriap</h1>
                <p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            </div>
        </article>
    )
}
export default ServiceCard