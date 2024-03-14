const host = import.meta.env.VITE_HOST
/**
 * @async 
 *  takes the data from a form-submit and calls the server
 * @returns a json object, otherwise catches the error
 * @param {*} data 
 */
export default async function signin(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}api/auth/signin`, { // Ajuste en la URL para llamar al endpoint 'signin'
            method: "POST",
            body: JSON.stringify(data), // data is the user object
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("Success:", response));
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}


