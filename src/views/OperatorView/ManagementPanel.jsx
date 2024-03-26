import SideBar from "../../components/SideBar"
import { Outlet } from "react-router-dom";

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
                <a className=" absolute top-0 right-0 mx-6 my-2" href="/">Salir</a>
            </div>

        </>

    )
}
export default ManagementPanel