import { useForm } from "react-hook-form";
import { createScheduleHours } from "../services/medicHours.service";
import { Schedule } from "../data/Schedule";
import dayjs from "dayjs";

export const useMedicSchedule = () => {
    const { register, handleSubmit, watch, reset } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log(data)


            // const response = await createScheduleHours(data);
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    });
    return {
        onSubmit,
        register,
        watch,
        reset
    }
}

export const useCreateSchedule = () => {
    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit(async () => {
        console.log(dayjs().format('YYYY-MM-DD'))
        console.log(Schedule[2].schedule)
        try {
            const data = {
                dia: dayjs().format('YYYY-MM-DD'),    //año mes dia
                schedule: Schedule[2].schedule
            }
            console.log(data)


            const response = await createScheduleHours(data);
            console.log(response);
        } catch (e) {
            console.log(e)  
        }
    });
    return {
        onSubmit
    }
}
