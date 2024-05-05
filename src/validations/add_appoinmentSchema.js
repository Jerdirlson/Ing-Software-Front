import { z } from 'zod'
/**
 * validation params
 * This object defines the validation that must be done scheduling appointment on OPERATOR
 * @requires zod
 */

export const add_appointment_schema = z.object({
    medic: z.string().min(1, {
        message: 'Seleccione un doctor',
    }),
    hora: z.string().min(1, {
        message: 'Seleccione una hora',
    }),
    nombre: z.string().min(1, {
        message: 'Este es un campo obligatorio',
    }),
    apellido: z.string().min(1, {
        message: 'Este es un campo obligatorio',
    }),
    telefono: z
        .string()
        .refine((telefono) => !isNaN(parseFloat(telefono)), {
            message: 'Ingrese un numero valido',
        }),
    documento_type: z.string().min(1, {
        message: 'Este es un campo obligatorio',
    }),
    documento: z.string()
        .min(6, {
            message: 'El formato exige más digitos',
        }).max(10, {
            message: 'El formato exige menos digitos',
        }),
    email: z.string().email({
        message: 'Ingrese un email valido',
    }),
    idSite: z.string().min(1, {
        message: 'Este es un campo obligatorio',
    })
})
