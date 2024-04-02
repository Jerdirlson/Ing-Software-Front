const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  sends data to create an appointment 
 * @returns a json object (), otherwise catches the error
 * @param {*} data 
 */
export async function add_appointment(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}appointments/appointment`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= CITA
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * @async 
 *  sends data to check an appointment 
 * @returns a json object (), otherwise catches the error
 * @param {*} data 
 */
export async function confirm_appointment(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}appointments/appointment`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
/**
 * @async 
 *  sends data to cancel an appointment 
 * @returns a json object (), otherwise catches the error
 * @param {*} data 
 */
export async function cancel_appointment(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}appointments/deleteAppointemtIdUser/${data}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}

export async function get_appointment(data) {   //DATA => ID CITA
    try {
        console.log(data)
        const response = await fetch(`${host}appointments/getAppointemId`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}
export async function update_appointment(data) {   //DATA => ID CITA, DIA, HORA
    try {
        console.log(data)
        const response = await fetch(`${host}appointments/updAppointemtIdUser`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al crear la cita');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse); // <= True or false <= Response
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}

