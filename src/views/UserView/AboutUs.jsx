import CustomMonthLayout from "../../components/Calendar"
/**
 * This section contains the information about the IPS 
 * @returns {Component} AboutUs
 */
const AboutUs = () => {
    return (
        <>
        <div className="flex items-center justify-center">
            <CustomMonthLayout />
            <h1 className="text-black text-2xl">SOMOS</h1>
        </div>
        </>
    )
}
export default AboutUs
