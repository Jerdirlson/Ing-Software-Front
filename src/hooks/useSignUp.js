import { useForm } from "react-hook-form";
import { signUp } from "../services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/registerSchema";
import { getCorreoNewUser } from "../utils/correo";
import { send_email_user_add } from "../services/email.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log(data)
            const response = await signUp(data);
            console.log(response);

            if (response) {
                const correoData = getCorreoNewUser(data)
                const responseCorreo = await send_email_user_add(correoData)
                console.log(responseCorreo);
            }

        } catch (e) {
            console.log(e)
        } finally {
            setIsModalOpen(true); 
            setTimeout(() => {
                navigate('/management');
            }, 4000); 
        }
    });
    return {
        onSubmit,
        register,
        watch,
        errors,
        reset,
        isModalOpen
    }
}
export default useSignUp;