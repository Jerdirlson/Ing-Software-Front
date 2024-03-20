import SideBar from "../../components/SideBar"
/**
 * Contains the main page of the operator user
 * @returns {Component} ManagementPanel
 */
const ManagementPanel = () => {
    return (
        <>
            <div className="flex h-screen w-full bg-gray-50">
                <SideBar />
                <div className="flex w-full items-center justify-center">OPERADOR IN PROGRESS...</div>
            </div>
        </>

    )
}
export default ManagementPanel