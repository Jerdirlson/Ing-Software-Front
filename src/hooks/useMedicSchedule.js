import { useForm } from "react-hook-form";
import { createScheduleHours, createScheduleMedics } from "../services/medicHours.service";
import { Schedule } from "../data/Schedule";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { get_all_medics } from "../services/appointments/getDoctors.service";

export const useMedicSchedule = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const [medics, setMedics] = useState(null)

    useEffect(() => {
        const getAllMedics = async () => {
            try {
                const res = await get_all_medics();
                setMedics(res.medic);
            } catch (error) {
                throw new Error('Error updating hours: ' + error.message);
            }
        };
        getAllMedics();
    }, []);
    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log(data)
            const response = await createScheduleMedics(data);
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    });
    return {
        onSubmit,
        register,
        watch,
        reset,
        medics
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
