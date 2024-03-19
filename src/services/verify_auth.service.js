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