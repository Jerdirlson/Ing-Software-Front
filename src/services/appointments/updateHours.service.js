const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  brings the available hours
 * @returns a json object (hours), otherwise catches the error
 * @param {*} data 
//  */

export async function update_Hours_on_scheduling(data) {
    try {
        console.log(typeof (data))
        console.log("THE DATE:", data)
        const response = await fetch(`${host}appointments/getFechaAvailableAdd?date=${data.dia}&id=${data.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al traer la informacion');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }
}
/**
 * @async 
 *  brings the available hours
 * @returns a json object (hours), otherwise catches the error
 * @param {*} data 
 */
export async function update_Hours_on_re_scheduling(data) {
    try {
        console.log(typeof (data))
        console.log("THE DATE:", data)
        const response = await fetch(`${host}appointments/getFechaAvailableDoc?date=${data.dia}&id=${data.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if (!response.ok) {
            throw new Error('Error al traer la informacion');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }
}






