import SideBar from "../../components/SideBar"
import { Outlet } from "react-router-dom";
import EXIT_ICON from "../../assets/svg/icons/Exit_Icon.svg"
/**
 * Contains the main page of the operator user
 * @returns {Component} ManagementPanel
 */
const ManagementPanel = () => {
    return (
        <>
            <div className="flex h-screen relative">
                <SideBar />
                <Outlet />
                <div className=" absolute top-0 right-0 mx-6 my-2">
                    <a className="flex flex-row" href="/"><img className="h-6 w-6 mr-2" src={EXIT_ICON} />Salir</a>
                </div>
            </div>

        </>

    )
}
export default ManagementPanel