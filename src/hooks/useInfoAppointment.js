import { useForm } from "react-hook-form";
import { get_appointment } from "../services/appointments/appointment.service";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "../validations/appointmentSchema";

export const useInfoAppointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(appointmentSchema),
    })
    const [cita, setCita] = useState(null)

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        try {
            const response = await get_appointment(data)
            if (response) {
                setCita(response)
            }
            console.log(data)
        } catch (error) {
            throw new Error('Error updating hours: ' + error.message);
        }
    })

    return {
        register,
        onSubmit,
        cita,
        errors
    };
};