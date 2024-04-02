const getFecha = (fechaSinFormatear) => {
    const fechaString = fechaSinFormatear;
    const regex = /^(\d{4})-(\d{2})-(\d{2})/;
    const fecha = regex.exec(fechaString);
    return fecha[0]
}

export const getCorreoData = (cita) => {
    const correoData = {
        nombreUsuario: `${cita.select.userById.nameUser} ${cita.select.userById.lastNameUser}`,
        fecha: getFecha(cita.select.schedule.fecha),
        hora: cita.select.schedule.hora,
        nombreSede: cita.select.site.nameSite,
        nombreMedico: `${cita.select.userMedic.nameUser} ${cita.select.userMedic.lastNameUser}`,
    }
    return correoData
}

