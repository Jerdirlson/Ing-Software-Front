const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  sends the data (user) to the server 
 * @returns 'true' if data matches with server info, otherwise catches the error
 * @param {*} data 
 */
export default async function signin(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}auth/signin`, { // Ajuste en la URL para llamar al endpoint 'signin'
            method: "POST",
            body: JSON.stringify(data), // data is the user object
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"

        })
        if (!response.ok) {
            throw new Error('Error al iniciar sesión');
        }

        const jsonResponse = await response.json();
        console.log("Success:", jsonResponse);
        return jsonResponse; // Devolver el resultado de la solicitud 
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}


