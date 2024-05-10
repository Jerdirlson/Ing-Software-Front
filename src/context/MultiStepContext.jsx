import { createContext, useState, useContext, Component } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../validations/userSchema"
import { useAppointmentSchedulerUSER } from "../hooks/useAppointmentScheduler";
import { add_appointment } from "../services/appointments/appointment.service";
import { useNavigate } from "react-router-dom";
/**
 * Creates the context of the data to create an appointment
 */
const MultiStepContext = createContext()
/**
 * Export the function to use the context body
 * @returns {Context} Context
 */
export const useSteps = () => {
    const context = useContext(MultiStepContext);
    if (!context) {
        throw new Error("No MultiStepContext")
    }
    return context
}
/**
 * Contains the functions of the Context
 * In order to have the data inputs info in the register appointment section
 * @param {*} param0 
 * @returns {Component} MultiStepContext.Provider that envolves the section appointment 
 * */
export const StepsProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedDate, setDate] = useState(null)
    const [sent, isSent] = useState(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }
    const backStep = () => {
        setCurrentStep(currentStep - 1)
    }
    const onSubmit = handleSubmit(async data => {
        data['dia'] = selectedDate
        isSent(true)
        console.log("pepepeppepepe")
        console.log(data)
        try {
            //LLAMADA AL ENDPOINT
            const response = await add_appointment(data)
            if (response) {
                setIsModalOpen(true); // Abre el modal después de que la cita se haya cancelado
                // const resCorreo = await 
            }
            console.log(data)
        } catch (e) {
            console.log('error', e)
        } finally {
            setTimeout(() => {
                navigate('/citas'); // Redirige después de un cierto tiempo
            }, 3000); // Tiempo en milisegundos (en este caso, 3 segundos)
        }
    })

    return (
        <MultiStepContext.Provider value={{
            currentStep,
            nextStep,
            backStep,
            register,
            onSubmit,
            setDate,
            selectedDate,
            sent,
            watch,
            isModalOpen
        }}>
            {children}
        </MultiStepContext.Provider>
    )
}
