const host = import.meta.env.VITE_HOST;

export async function getPDF(data) {
    console.log(data);
    try {
        const response = await fetch(`${host}users/getHistoryClient`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error('Error al obtener los pacientes');
        }

        const pdfBlob = await response.blob();

        // Manejar el Blob según tus necesidades
        // Por ejemplo, puedes crear una URL objetiva para mostrar el PDF en un visor de PDF
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Devolver la URL del PDF
        return pdfUrl;
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error al procesar la solicitud:', error);
        throw error;
    }
}
