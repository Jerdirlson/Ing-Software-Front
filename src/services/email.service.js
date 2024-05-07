const host = import.meta.env.VITE_HOST
/**
 * 
 * @param {*} data 
 * @returns 
 */
export async function send_email_add(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}correo/correoAdd`, {
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
export async function send_email_cancel(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}correo/correoCancel`, {
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
export async function send_email_re_add(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}correo/correoReAdd`, {
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
export async function send_email_user_add(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}correo/correoUserAdd`, {
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