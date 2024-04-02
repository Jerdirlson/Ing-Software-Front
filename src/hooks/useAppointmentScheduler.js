import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { update_Hours_on_reScheduling, update_Hours_on_scheduling } from '../services/appointments/updateHours.service';
import { add_appointment } from '../services/appointments/appointment.service';


/**
 * 
 * @param {*} selectedDate 
 * @returns de date on yy-mm-dd format
 */
const defineDate = (selectedDate) => {
  const year = selectedDate ? selectedDate.$y : null;
  const month = selectedDate ? selectedDate.$M + 1 : null; // El mes es zero-based, por eso sumamos 1
  const day = selectedDate ? selectedDate.$D : null;
  return `${year}-${month}-${day}`;
};


/**
 * Custom hook for adding an appointment
 * @returns functions for management of adding appointments
 */
export const useAppointmentScheduler = () => {
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoursAvailable, setHoursAvailable] = useState(null);

  useEffect(() => {
    const updateHours_Add = async () => {
      const date = defineDate(selectedDate);
      if (date === 'null-null-null') {
        return '';
      }
      try {
        const res_hours = await update_Hours_on_scheduling(date);
        setHoursAvailable(res_hours.schedule);
      } catch (error) {
        throw new Error('Error updating hours: ' + error.message);
      }
    };
    updateHours_Add();
  }, [selectedDate]);

  const onSubmit = handleSubmit(async (data) => {
    data['dia'] = selectedDate ? defineDate(selectedDate) : '';
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

/**
 * Custom hook for re scheduling an appointment
 * @returns functions for management of adding appointments
 */
export const useAppointment_ReScheduler = () => {

  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoursAvailable, setHoursAvailable] = useState(null);
  const [cita, setCita] = useState(null);


  useEffect(() => {
    const updateHours_Re_Add = async () => {
      const date = defineDate(selectedDate);
      if (date === 'null-null-null') {
        return '';
      }
      try {
        const data = {
          dia: date,
          id: cita
        }
        const res_hours = await update_Hours_on_reScheduling(data);
        setHoursAvailable(res_hours.schedule);
      } catch (error) {
        throw new Error('Error updating hours: ' + error.message);
      }
    };
    updateHours_Re_Add();
  }, [selectedDate]);

  const onSubmit = handleSubmit(async (data) => {
    data['dia'] = selectedDate ? defineDate(selectedDate) : '';
    const response = await add_appointment(data);
    console.log(response);
  });

  return {
    setSelectedDate,
    hoursAvailable,
    register,
    setCita
  };
};
