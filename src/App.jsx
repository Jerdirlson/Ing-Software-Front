import Login from './views/UserView/Login.jsx'
import Dashboard from './views/UserView/Dashboard.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Importando librerias de react-router-dom para el manejo de wards ('/')
import Services from './views/UserView/Services.jsx';
import AboutUs from './views/UserView/AboutUs.jsx';
import MedicalHistory from './views/UserView/MedicalHistory.jsx';
import Appointments from './views/UserView/Appointments.jsx';
import ManagementPanel from './views/OperatorView/ManagementPanel.jsx';
import ProtectedRouteOperator from './routes/ProtectedRouteOperator.jsx';
import DoctorDashboard from './views/DoctorView/DoctorDashboard.jsx';
import NotFound from './views/NotFound.jsx';
import ConfirmAppointment from './views/OperatorView/ConfirmAppointment.jsx';
import CancelAppointmnet from './views/OperatorView/CancelAppointment.jsx';
import RescheduleAppointment from './views/OperatorView/RescheduleAppointment.jsx';
import ScheduleAppointment from './views/OperatorView/ScheduleAppointment.jsx';
import UserScheduleAppointment from './views/UserView/ScheduleAppointment.jsx';

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
        {/* USUARIO */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/citas' element={<Appointments />} />
        <Route path='/agendamiento' element={<UserScheduleAppointment />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/historiaclinica' element={<MedicalHistory />} />
        {/* OPERADOR */}


        <Route element={<ProtectedRouteOperator />}>
          <Route path='/management/' element={<ManagementPanel />}>
            <Route path='confirm' element={<ConfirmAppointment />} />
            <Route path='cancel' element={<CancelAppointmnet />} />
            <Route path='schedule' element={<ScheduleAppointment />} />
            <Route path='reschedule' element={<RescheduleAppointment />} />
          </Route>
        </Route>


        {/* </Route> */}

        {/* MEDICO */}
        {/* <Route element={<ProtectedRoute isAllowed={user.rol === 3} />} > */}
        <Route path='medico' element={<DoctorDashboard />} />
        {/* </Route> */}


        {/* RUTAS NO EXISTENTES */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter >


  )
}


export default App
