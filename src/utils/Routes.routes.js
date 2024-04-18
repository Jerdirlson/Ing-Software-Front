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
    { name: 'Confirmacion de cita', href: '/management/confirm' },
    { name: 'Cancelacion', href: '/management/cancel'},
    { name: 'Agendar Citas', href: '/management/schedule'},
    { name: 'Reasignacion de citas', href: '/management/reschedule'},
    { name: 'Agregar Usuario', href: '/management/addUser'},

    
]