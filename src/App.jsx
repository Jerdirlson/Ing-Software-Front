import Login from './views/UserView/Login.jsx'
import Dashboard from './views/UserView/Dashboard.jsx'

import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';  // Importando librerias de react-router-dom para el manejo de wards ('/')
import Services from './views/UserView/Services.jsx';
import AboutUs from './views/UserView/AboutUs.jsx';
import MedicalHistory from './views/UserView/MedicalHistory.jsx';
import Appointments from './views/UserView/Appointments.jsx';
import ManagementPanel from './views/OperatorView/ManagementPanel.jsx';

import { useState } from 'react';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import {User} from './constants/User.js';
/**
 * App structure 'routes'
 * Defines routes and its related components
 * @returns {Component} App
 */
function App() {
  const user = User.getUser()
  if (!!user) {
    console.log(user)
  }
  return (

    <BrowserRouter>
      <Routes>
        {/* MAIN ROUTE '/' */}
        <Route index element={<Dashboard />} />
        {/* USUARIO */}
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='nosotros' element={<AboutUs />} />
        <Route path='citas' element={<Appointments />} />
        <Route path='servicios' element={<Services />} />
        <Route path='historiaclinica' element={<MedicalHistory />} />
        {/* OPERADOR */}
        {/* <Route element={<ProtectedRoute isAllowed={user.rol === 2} redirectTo={"/management"} />} > */}
          <Route path='management' element={<ManagementPanel/>} />
        {/* </Route> */}

        {/* MEDICO */}
        {/* <Route element={<ProtectedRoute isAllowed={user.rol === 3} />} >
          <Route path='medico' element={<DoctorPanel />} />
        </Route> */}
      </Routes>
    </BrowserRouter>


  )
}


export default App
