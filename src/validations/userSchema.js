import { z } from 'zod'
/**
 * validation params
 * This object defines the validation that must be done on the LOGIN
 * @requires zod
 */
export const userSchema = z.object({
    email: z.string().email({
        message: 'Ingrese un email valido',
    }),
    password: z.string().min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres',
    }
    )
})