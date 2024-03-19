const host = import.meta.env.VITE_HOST

export default async function verifyTokenRequest(token) {
    try {
        const response = await fetch(`${host}api/auth/profile`, { // Ajuste en la URL para llamar al endpoint 'signin'
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'auth-token': token,

            },
            credentials: "include"
        })
            .then((res) => res.json())
            .then((response) => console.log("Success:", response))
            .catch((error) => console.error("Error:", error))
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
    }

}