const host = import.meta.env.VITE_HOST

export async function get_doctors(data) {
    console.log(data)
    try {
        const response = await fetch(`${host}appointments/getSheduleMedicService`, {
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
export async function get_all_medics() {    //SHOULD BE GET
    try {
        const response = await fetch(`${host}medic/getMedicUsers`, {
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
