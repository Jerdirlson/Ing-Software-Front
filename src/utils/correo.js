import { Sites } from "../data/Sites.data";

const getFecha = (fechaSinFormatear) => {
    const fechaString = fechaSinFormatear;
    const regex = /^(\d{4})-(\d{2})-(\d{2})/;
    const fecha = regex.exec(fechaString);
    return fecha[0]
}

export const getCorreoDataCancel = (cita) => {
    const correoData = {
        nombreUsuario: `${cita.select.userById.nameUser} ${cita.select.userById.lastNameUser}`,
        fecha: getFecha(cita.select.schedule.fecha),
        hora: cita.select.schedule.hora,
        nombreSede: cita.select.site.nameSite,
        nombreMedico: `${cita.select.userMedic.nameUser} ${cita.select.userMedic.lastNameUser}`,
    }
    return correoData
}
export const getCorreoDataAgendar = (data) => {
    const correoData = {
        nombreUsuario: `${data.nombre} ${data.apellido}`,
        fecha: data.dia,
        hora: data.hora,
        nombreSede: `${Sites.find(site => site.id == data.idSite)?.name || 'Site Desconocido'}`,
        nombreMedico: data.medic
    }
    return correoData
}
export const getCorreDataReAgendar = (cita) => {
    const correoData = {
        nombreUsuario: `${cita.userById.nameUser} ${cita.userById.lastNameUser}`,
        fecha: getFecha(cita.schedule.fecha),
        hora: cita.schedule.hora,
        nombreSede: cita.eps.nameEps,
        nombreMedico: `${cita.userMedic.nameUser} ${cita.userMedic.lastNameUser}`,
        correo: cita.userById.emailUser
    }
    return correoData
}