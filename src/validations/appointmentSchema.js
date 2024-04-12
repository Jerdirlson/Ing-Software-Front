import { z } from 'zod'
/**
 * validation params
 * This object defines the validation that must be done on the infoAppointment
 * @requires zod
 */

export const appointmentSchema = z.object({
    id: z.string().min(1, {
        message: 'Ingrese un id existente',
    })
})