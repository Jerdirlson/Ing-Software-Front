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
import UserScheduleAppointment from './views/UserView/UserAppointment.jsx';
import ProtectedRouteMedic from './routes/ProtectedRouteMedic.jsx';
import UserCancelAppointment from './views/UserView/UserCancelAppoinment.jsx';
import UserReScheduleAppoinment from './views/UserView/UserReScheduleAppoinment.jsx';
import RegisterUsers from './views/OperatorView/RegisterUsers.jsx';
import MedicSchedule from './views/DoctorView/MedicSchedule.jsx';
import HisorialesClinicos from './views/DoctorView/HIstorialesClinicos.jsx';
import InfoPacientes from './views/DoctorView/InfoPacientes.jsx';
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


        {/* STEPS TO SCHEDULE AS USER*/}
        <Route path="/agendamiento/" element={<UserScheduleAppointment />} />
        {/* STEPS TO CANCEL SCHEDULE AS USER*/}

        <Route path="/cancelar/" element={<UserCancelAppointment />} />
        {/* STEPS TO RE_SCHEDULE AS USER */}

        <Route path="/reAgendar/" element={<UserReScheduleAppoinment />} />

        <Route path='/servicios' element={<Services />} />
        <Route path='/historiaclinica' element={<MedicalHistory />} />


        {/* OPERADOR */}
        {/* <Route element={<ProtectedRouteOperator />}> */}
          <Route path='/management/' element={<ManagementPanel />}>
            <Route path='confirm' element={<ConfirmAppointment />} />
            <Route path='cancel' element={<CancelAppointmnet />} />
            <Route path='schedule' element={<ScheduleAppointment />} />
            <Route path='reschedule' element={<RescheduleAppointment />} />
            <Route path='addUser' element={<RegisterUsers />} />
          </Route>
        {/* </Route> */}


        {/* </Route> */}

        {/* MEDICO */}
        <Route element={<ProtectedRouteMedic />} >
          <Route path='medico' element={<DoctorDashboard />} >
            <Route path='agenda' element={<MedicSchedule />} />
            <Route path='historiales_clinicos' element={<HisorialesClinicos />} />
            <Route path='pacientes' element={<InfoPacientes />} />
          </Route>
        </Route>


        {/* RUTAS NO EXISTENTES */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter >


  )
}


export default App
