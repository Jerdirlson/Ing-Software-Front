const host = import.meta.env.VITE_HOST

export default async function signin(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}api/auth/signin`, { // Ajuste en la URL para llamar al endpoint 'signin'
            method: "POST", // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
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


