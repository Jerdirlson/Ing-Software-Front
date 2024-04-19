import { Outlet } from "react-router-dom"
import EXIT_ICON from "../../assets/svg/icons/Exit_Icon.svg"
import SideBarMedic from "../../components/SideBarMedic"

const DoctorDashboard = () => {
    return (
        <>
            <div className="flex h-screen relative">
                <SideBarMedic />
                <Outlet/>
                <div className=" absolute top-0 right-0 mx-6 my-2">
                    <a className="flex flex-row" href="/"><img className="h-6 w-6 mr-2" src={EXIT_ICON} />Salir</a>

                </div>
            </div>

        </>

    )
}
export default DoctorDashboard