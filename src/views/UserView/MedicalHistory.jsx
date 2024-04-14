import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import SimpleTable from "../../components/SimpleTable"

/**
 * This section contains the medical records
 * @returns {Component} MedicalHistory
 */
const MedicalHistory = () => {
    return (
        <>
            <NavBar />
            <main className="h-screen flex items-center justify-center">
                <SimpleTable/>
                {/* <div className="flex flex-col items-center justify-center text-2xl p-20 text-center">
                    <h1 className="font-bold">Sorry</h1>
                    <h2 className="font-bold" >
                        We still working on it
                    </h2>

                    <p className="mt-4 ">Para consultar su historial medico dirigase a uno de nuestros lugares fisicos !</p>
                    <Link to={'/'}>
                        <button class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary-blue before:to-secondary-blue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                            Atrás
                        </button>
                    </Link>
                    

                </div> */}
            </main>

            <Footer />
        </>
    )
}
export default MedicalHistory