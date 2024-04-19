/**
 * Object that contains the routes on the navBar on the user page
 */
export const navigation = [
    { name: 'Nosotros', href: '/nosotros', current: false },
    { name: 'Citas', href: '/citas', current: false },
    { name: 'Servicios', href: '/servicios', current: false },
    { name: 'Resultados Clinicos', href: '/historiaclinica', current: false },
]
/**
 * Object that contains the routes on the sideBar operator
 */
export const operatorNavigation = [
    { name: 'Confirmación de cita', href: '/management/confirm' },
    { name: 'Cancelación', href: '/management/cancel'},
    { name: 'Agendar Citas', href: '/management/schedule'},
    { name: 'Reasignación de citas', href: '/management/reschedule'},
    { name: 'Agregar Usuario', href: '/management/addUser'},
]
export const medicNavigation = [
    { name: 'Agenda', href: '/medico/agenda' },
    { name: 'Ver historiales clínicos', href: '/medico/historiales_clinicos'},
    { name: 'Información de Pacientes', href: '/medico/pacientes'}
]