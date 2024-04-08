import { createContext, useState, useContext, Component } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../validations/userSchema"
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
    // const [finalData, setFinalData] = useState([])
    // const [userData, setUserData] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm()


    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }
    const backStep = () => {
        setCurrentStep(currentStep - 1)
    }
    const onSubmit = handleSubmit(async data => {
        console.log("pepepeppepepe")
        console.log(data)
        try {
            // const response = await signinContext(data)   
            console.log(data)
        } catch (e) {
            console.log('error', e)
        }
    })
    // const onSubmit = () => {
    //     console.log("pepepeppepepe")
    // }

    return (
        <MultiStepContext.Provider value={{
            currentStep,
            nextStep,
            backStep,
            // finalData,
            // setFinalData,
            register,
            onSubmit
        }}>
            {children}
        </MultiStepContext.Provider>
    )
}
