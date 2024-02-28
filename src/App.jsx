import Login from './views/Login.jsx'
import Dashboard from './views/Dashboard.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Importando librerias de react-router-dom para el manejo de wards ('/')
function App() {

  // const host = import.meta.env.VITE_HOST

  /**
   * Estructura de la pagina. Rutes '/'
   */
  return (

    <BrowserRouter>
      <Routes>
        {/* MAIN ROUTE '/' */}
        <Route index element={<Dashboard />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>


  )
}


export default App
