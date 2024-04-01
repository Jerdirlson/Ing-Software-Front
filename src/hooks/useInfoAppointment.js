import { useForm } from "react-hook-form";
import { get_appointment } from "../services/appointments/appointment.service";
import { useState } from "react";

export const useInfoAppointment = () => {
    const { register, handleSubmit } = useForm()
    const [cita, setCita] = useState(null)

    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await get_appointment(data)
            console.log(data)
            setCita(response)

        } catch (error) {
            throw new Error('Error updating hours: ' + error.message);
        }
    })

    return {
        register,
        onSubmit,
        cita
    };
};