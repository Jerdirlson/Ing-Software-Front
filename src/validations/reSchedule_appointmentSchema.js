import { z } from 'zod'
/**
 * validation params
 * This object defines the validation that must be done RE-scheduling appointment on OPERATOR
 * @requires zod
 */

export const reSchedule_Schema = z.object({
    hora: z.string().min(1, {
        message: 'Seleccione una hora',
    }),
})
