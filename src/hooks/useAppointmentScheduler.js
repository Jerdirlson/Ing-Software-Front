import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { update_Hours_on_reScheduling, update_Hours_on_scheduling } from '../services/appointments/updateHours.service';
import { add_appointment, update_appointment } from '../services/appointments/appointment.service';
import { send_email } from '../services/email.service';
import { getCorreoData } from '../utils/correo';
import { useSteps } from '../context/MultiStepContext';


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
  const { setDate } = useSteps()


  useEffect(() => {
    const updateHours_Add = async () => {
      const date = defineDate(selectedDate);
      setDate(date)
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
    //Objeto recien creado
    const dataToSendCorreo = {
      nombreUsuario: `${data.nombre} ${data.apellido}`,
      fecha: data.fecha,
      hora: data.hora,
      nombreSede: data.idSite, //TOCA ACITALZAR
      nombreMedico: data.medic
    }
    //-------------------------
    const responseCorreo = await send_email(dataToSendCorreo)
    console.log(response);
    console.log(responseCorreo);
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
          id: cita.response.idScheduleMedic
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
    data['id'] = cita.response.idScheduleMedic

    const response = await update_appointment(data);
    //---
    const correoData = getCorreoData(cita)
    const responseCorreo = await send_email(correoData)

    console.log(responseCorreo);
    console.log(response);
  });

  return {
    setSelectedDate,
    hoursAvailable,
    register,
    setCita,
    onSubmit
  };
};
