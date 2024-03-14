import Login from './views/Login.jsx'
import Dashboard from './views/Dashboard.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Importando librerias de react-router-dom para el manejo de wards ('/')
import Services from './views/Services.jsx';
import AboutUs from './views/AboutUs.jsx';
import MedicalHistory from './views/MedicalHistory.jsx';
import Appointments from './views/Appointments.jsx';
/**
 * App structure 'routes'
 * Defines routes and its related components
 * @returns {Component} App
 */
function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* MAIN ROUTE '/' */}
        <Route index element={<Dashboard />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='nosotros' element={<AboutUs />} />
        <Route path='citas' element={<Appointments />} />
        <Route path='servicios' element={<Services />} />
        <Route path='historiaclinica' element={<MedicalHistory />} /> 
      </Routes>
    </BrowserRouter>


  )
}


export default App
