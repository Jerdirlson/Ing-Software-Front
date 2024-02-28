import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className='flex justify-center items-center h-80 flex-col'>
                <h1 className="text-xl text-black p-5"> - THIS IS OUR HOME - ! </h1>
                <Link to="/login">
                    <p className='text-purple-800 text-lg underline underline-offset-1'>CLICK HERE TO LOG IN !</p>
                </Link>
            </div>
        </>

    )
}
export default Dashboard