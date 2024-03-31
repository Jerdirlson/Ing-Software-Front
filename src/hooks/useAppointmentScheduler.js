import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import update_Hours from '../services/appointments/updateHours.service';
import {add_appointment} from '../services/appointments/appointment.service';
/**
 * Custom hook for adding an appointment
 * @returns functions for management of adding appointments
 */
const useAppointmentScheduler = () => {
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoursAvailable, setHoursAvailable] = useState(null);

  const defineDate = () => {
    const year = selectedDate ? selectedDate.$y : null;
    const month = selectedDate ? selectedDate.$M + 1 : null; // El mes es zero-based, por eso sumamos 1
    const day = selectedDate ? selectedDate.$D : null;
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const updateHours = async () => {
      const date = defineDate();
      if (date === 'null-null-null') {
        return '';
      }
      try {
        const res_hours = await update_Hours(date);
        setHoursAvailable(res_hours.schedule);
      } catch (error) {
        throw new Error('Error updating hours: ' + error.message);
      }
    };
    updateHours();
  }, [selectedDate]);

  const onSubmit = handleSubmit(async (data) => {
    data['dia'] = selectedDate ? defineDate() : '';
    const response = await add_appointment(data);
    console.log(response);
  });

  return {
    register,
    onSubmit,
    setSelectedDate,
    hoursAvailable,
  };
};

export default useAppointmentScheduler;
