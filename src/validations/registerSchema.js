import { z } from 'zod'
/**
 * validation params
 * This object defines the validation that must be doneto register a user
 * @requires zod
 */

export const registerSchema = z.object({
    city: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    dir: z.string().min(10, {
        message: 'Este campo es obligatorio',
    }),
    emailUser: z.string().email({
        message: 'Ingrese un email valido',
    }),
    eps: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    fijo: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    // fijo: z.string()
    //     .max(40)
    //     .transform((fijo) => {
    //         return fijo ? fijo : null
    //     }),
    idRol: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    lastNameUser: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    nameUser: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    numId: z.string().min(6, {
        message: 'El formato exige más digitos',
    }).max(10, {
        message: 'El formato exige menos digitos',
    }),
    pwdUser: z.string().min(6, {
        message: 'El minimo de caracteres es 6',
    }),
    siteUser: z.string().min(1, {
        message: 'Este campo es obligatorio',
    }),
    street: z.string().min(4, {
        message: 'Este campo es obligatorio',
    }),
    telf: z
        .string()
        .refine((telefono) => !isNaN(parseFloat(telefono)), {
            message: 'Ingrese un numero valido',
        }),
})
